import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { City } from './models/city.model';
import { Weather } from './models/weather.model';

const ApiKey = '0d7303c17ee3d3482cd82a2ad273a90d';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  getWeather({ name, units }: City): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${ApiKey}&units=${units}`);
  }
}
