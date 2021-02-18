import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { WeatherState } from 'src/app/core/store/weather.reducer';
import { addCity, saveCity } from 'src/app/core/store/weather.actions';

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

  @Input() index!: number;

  cityForm = new FormGroup({
    name: new FormControl(''),
    units: new FormControl(''),
  });

  ngOnInit(): void {
    const city$ = this.store.select(state => state.weather.selectedCities[this.index ?? -1]);
    city$.subscribe(city => this.cityForm.patchValue(city, { emitEvent: false }));

    this.cityForm.valueChanges.pipe(
      filter(city => this.cityForm.valid),
    ).subscribe(city => {
      this.store.dispatch(saveCity({ city, index: this.index }));
    });
  }

  add(): void {
    this.store.dispatch(addCity());
  }
}
