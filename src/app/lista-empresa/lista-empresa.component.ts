import swal from 'sweetalert2';
import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css'],
})
export class ListaEmpresasComponent implements OnInit {
  empresas: Empresa[];

  constructor(
    private empresaServicio: EmpresaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  actualizarEmpresa(id: number) {
    this.router.navigate(['actualizar-empresa', id]);
  }

  agregarEmpresa() {
    this.router.navigate(['registrar-empresa']);
  }

  private obtenerEmpresas() {
    this.empresaServicio.obtenerListaDeEmpresas().subscribe((dato) => {
      this.empresas = dato;
    });
  }

  eliminarEmpresa(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la empresa',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.empresaServicio.eliminarEmpresa(id).subscribe((dato) => {
          console.log(dato);
          this.obtenerEmpresas();
          swal(
            'Empresa eliminada',
            'La empresa ha sido eliminada con exito',
            'success'
          );
        });
      }
    });
  }

  verDetallesDelEmpresa(id: number) {
    this.router.navigate(['empresa-detalles', id]);
  }
}
