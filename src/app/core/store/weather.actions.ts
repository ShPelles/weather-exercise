import { createAction, props } from '@ngrx/store';
import { City } from 'src/app/core/models/city.model';

export const addCity = createAction('[City Selector] Add City', props<{ city: City }>());
export const saveCity = createAction('[City Selector] Save City', props<{ index: number, city: City }>());
