import { createAction, props } from '@ngrx/store';
import { City } from 'src/core/models/city.model';

export const addCity = createAction('[Selected cities] add', props<{ city: City }>());
export const saveCity = createAction('[Selected cities] save', props<{ index: number, city: City }>());
