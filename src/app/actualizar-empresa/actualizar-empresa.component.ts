import swal from 'sweetalert2';
import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css'],
})
export class ActualizarEmpresaComponent implements OnInit {
  id: number;
  empresa: Empresa = new Empresa();
  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaService.obtenerEmpresaPorId(this.id).subscribe(
      (dato) => {
        this.empresa = dato;
      },
      (error) => console.log(error)
    );
  }

  irAlaListaDeEmpresas() {
    this.router.navigate(['/empresas']);
    swal(
      'Empresa actualizada',
      `La empresa ${this.empresa.nombre} ha sido actualizada con exito`,
      `success`
    );
  }

  onSubmit() {
    this.empresaService.actualizarEmpresa(this.id, this.empresa).subscribe(
      (dato) => {
        this.irAlaListaDeEmpresas();
      },
      (error) => console.log(error)
    );
  }
}
