import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { weatherReducer } from './core/store/weather.reducer';
import { ResultListComponent } from './result-list/result-list.component';
import { WeatherEffects } from './core/store/weather.effects';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    EffectsModule.forRoot([WeatherEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
