import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { weatherReducer } from 'src/store/weather.reducer';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
