import { createReducer, on } from '@ngrx/store';

import { addCity, saveCity, weatherLoadedSuccess } from './weather.actions';
import { City } from '../models/city.model';
import { Weather } from '../models/weather.model';
import * as immutable from '../utils/immutable-array.utils';
import { ApiResult } from '../models/api-result.model';

export interface WeatherState {
  availableCities: string[];
  selectedCities: City[];
  weather: ApiResult<Weather>[];
}

const emptyCity: City = { name: '', units: '' };

export const initialState: WeatherState = {
  availableCities: [
    'Kiev',
    'Tel Aviv',
    'Jerusalem',
    'Modi\'in',
    'New York',
    'Tokio',
  ],
  selectedCities: [
    { ...emptyCity },
  ],
  weather: [],
};

export const weatherReducer = createReducer(
  initialState,
  on(saveCity, (state, { index, city }) => ({ ...state, selectedCities: immutable.splice(state.selectedCities, index, 1, [city]) })),
  on(addCity, (state) => ({ ...state, selectedCities: immutable.push(state.selectedCities, { ...emptyCity }) })),
  on(weatherLoadedSuccess, (state, { index, weather }) => {
    const apiResult: ApiResult<Weather> = { value: weather, loading: false };
    return { ...state, weather: immutable.splice(state.weather, index, 0, [apiResult]) };
  }),
);
