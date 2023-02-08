import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CentrosComercialesComponent } from './clientes/centros-comerciales/centros-comerciales.component';
import { ConstructorasComponent } from './clientes/constructoras/constructoras.component';
import { ExpansionComercialComponent } from './clientes/expansion-comercial/expansion-comercial.component';
import { TestimoniosComponent } from './inicio/testimonios/testimonios.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConferenciasComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent,
    ServiciosComponent,
    WhatsappComponent,
    CentrosComercialesComponent,
    ConstructorasComponent,
    ExpansionComercialComponent,
    TestimoniosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
