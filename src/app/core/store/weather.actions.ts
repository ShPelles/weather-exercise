import { createAction, props } from '@ngrx/store';
import { City } from '../models/city.model';
import { Weather } from '../models/weather.model';

export const addCity = createAction('[City Selector] Add City', props<{ city: City }>());
export const saveCity = createAction('[City Selector] Save City', props<{ index: number, city: City }>());

export const weatherLoadedSuccess = createAction('[Weather Service] Weather Loaded Success', props<{ weather: Weather, city: City }>());
export const weatherLoadedFailed = createAction('[Weather Service] Weather Loaded Failed', props<{ city: City }>());
