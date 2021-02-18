import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { WeatherService } from '../weather.service';
import { weatherLoadedSuccess, weatherLoadedFailed, addCity, saveCity } from './weather.actions';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(addCity, saveCity),
    mergeMap((payload) => this.weatherService.getWeather(payload.city).pipe(
      map(weather => weatherLoadedSuccess({ weather, city: payload.city })),
      catchError(() => of(weatherLoadedFailed({ city: payload.city }))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }
}
