import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { WeatherService } from '../weather.service';
import { weatherLoadedSuccess, weatherLoadedFailed, saveCity } from './weather.actions';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(saveCity),
    mergeMap((payload) => this.weatherService.getWeather(payload.city).pipe(
      map(weather => weatherLoadedSuccess({ weather, index: payload.index })),
      catchError(() => of(weatherLoadedFailed({ index: payload.index }))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }
}
