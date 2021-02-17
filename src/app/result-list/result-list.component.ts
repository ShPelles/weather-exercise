import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { City } from 'src/core/models/city.model';
import { WeatherState } from 'src/store/weather.reducer';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  selectedCities$: Observable<City[]>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.selectedCities$ = store.select(state => state.weather.selectedCities);
  }

  ngOnInit(): void {
  }

}
