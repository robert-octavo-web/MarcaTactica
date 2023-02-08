import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
 {path:'', component: InicioComponent},
 {path:'clientes', component: ClientesComponent},
 {path:'servicios', component:ServiciosComponent},
 {path:'conferencias', component:ConferenciasComponent},
 {path:'contacto',component:ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
