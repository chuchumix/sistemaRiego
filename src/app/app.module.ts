import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './component/temperatura/temperatura.component';
import { TemperaturaService } from './services/temperatura.service';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TemperaturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
