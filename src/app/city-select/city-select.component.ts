import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { WeatherState } from 'src/store/weather.reducer';
import { addCity, saveCity } from 'src/store/weather.actions';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {

  availableCities$: Observable<string[]>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.availableCities$ = store.select(state => state.weather.availableCities);
  }

  @Input() index: number | null = null;

  cityForm = new FormGroup({
    name: new FormControl(''),
    units: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.select(state => state.weather.selectedCities[this.index ?? -1]).pipe(
      first(),
    ).subscribe(city => this.cityForm.patchValue(city));
  }

  save(): void {
    // if (this.cityForm.invalid) { throw new Error('Invalid'); } // TODO
    if (this.index === null) {
      this.store.dispatch(addCity({ city: this.cityForm.value }));
    } else {
      this.store.dispatch(saveCity({ city: this.cityForm.value, index: this.index }));
    }
  }
}
