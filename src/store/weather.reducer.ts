import { createReducer, on } from '@ngrx/store';

import { addCity, saveCity } from './weather.actions';
import { City } from 'src/core/models/city.model';
import * as immutable from 'src/core/utils/immutable-array.utils';

export interface WeatherState {
  availableCities: string[];
  selectedCities: City[];
  weather: any[]; // TODO!
}

export const initialState: WeatherState = {
  availableCities: [
    'Kiev',
    'Tel Aviv',
    'Jerusalem',
    'Modi\'in',
    'New York',
    'Tokio',
  ],
  selectedCities: [],
  weather: [],
};

export const weatherReducer = createReducer(
  initialState,
  on(saveCity, (state, { index, city }) => ({ ...state, selectedCities: immutable.splice(state.selectedCities, index, 1, [city]) })),
  on(addCity, (state, { city }) => ({ ...state, selectedCities: immutable.push(state.selectedCities, city) })),
);
