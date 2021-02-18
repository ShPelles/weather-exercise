import { Component, TrackByFunction } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from './core/models/city.model';

import { WeatherState } from './core/store/weather.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedCities$: Observable<City[]>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.selectedCities$ = store.select(state => state.weather.selectedCities);
  }
}
