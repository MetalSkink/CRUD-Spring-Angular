import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
