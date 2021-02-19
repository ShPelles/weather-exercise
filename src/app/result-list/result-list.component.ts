import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherState } from 'src/app/core/store/weather.reducer';
import { ApiResult } from '../core/models/api-result.model';
import { Weather } from '../core/models/weather.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  weatherResult$: Observable<ApiResult<Weather>[]>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.weatherResult$ = store.select(state => state.weather.weather);
  }

  ngOnInit(): void {
  }

  trackByIndex: TrackByFunction<unknown> = index => index;
}
