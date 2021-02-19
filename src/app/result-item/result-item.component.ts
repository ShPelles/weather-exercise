import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiResult } from '../core/models/api-result.model';

import { Weather } from '../core/models/weather.model';
import { WeatherState } from '../core/store/weather.reducer';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  weather$!: Observable<ApiResult<Weather>>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.weather$ = store.select(state => state.weather.weather[this.index]);
  }

  @Input() index!: number;
  @Input() showIcon = false;
  @Input() showDescription = false;

  ngOnInit(): void {
  }

}
