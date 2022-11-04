import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css'],
})
export class RegistrarEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa();
  constructor(
    private empresaServicio: EmpresaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarEmpresa() {
    this.empresaServicio.registrarEmpresa(this.empresa).subscribe(
      (dato) => {
        console.log(dato);
        this.irAlaListaDeEmpresas();
      },
      (error) => console.log(error)
    );
  }

  irAlaListaDeEmpresas() {
    this.router.navigate(['/empresas']);
  }

  onSubmit() {
    console.log(this.empresa);
    this.guardarEmpresa();
  }
}
