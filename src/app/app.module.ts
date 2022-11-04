import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ListaEmpresasComponent } from './lista-empresa/lista-empresa.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    ListaEmpresasComponent,
    RegistrarEmpleadoComponent,
    RegistrarEmpresaComponent,
    ActualizarEmpleadoComponent,
    ActualizarEmpresaComponent,
    EmpleadoDetallesComponent,
    EmpresaDetallesComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
