import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './component/temperatura/temperatura.component';
import { TemperaturaService } from './services/temperatura.service';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    TemperaturaService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
