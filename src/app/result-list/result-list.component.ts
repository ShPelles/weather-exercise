import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { City } from 'src/app/core/models/city.model';
import { WeatherState } from 'src/app/core/store/weather.reducer';
import { ApiResult } from '../core/models/api-result.model';
import { Weather } from '../core/models/weather.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  selectedCities$: Observable<City[]>;
  weatherResult$: Observable<ApiResult<Weather>[]>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.selectedCities$ = store.select(state => state.weather.selectedCities);
    this.weatherResult$ = store.select(state => state.weather.weather);
  }

  ngOnInit(): void {
  }

}
