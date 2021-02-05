import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {ServicioService}  from './components/servicio.service'
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
