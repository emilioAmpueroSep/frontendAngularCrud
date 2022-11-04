import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { EmpresaDetallesComponent } from './empresa-detalles/empresa-detalles.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ListaEmpresasComponent } from './lista-empresa/lista-empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empresas', component: ListaEmpresasComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'registrar-empresa', component: RegistrarEmpresaComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'actualizar-empresa/:id', component: ActualizarEmpresaComponent },
  { path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent },
  { path: 'empresa-detalles/:id', component: EmpresaDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
