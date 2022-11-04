import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-detalles',
  templateUrl: './empresa-detalles.component.html',
  styleUrls: ['./empresa-detalles.component.css'],
})
export class EmpresaDetallesComponent implements OnInit {
  id: number;
  empresa: Empresa;
  constructor(
    private route: ActivatedRoute,
    private empresaServicio: EmpresaService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresa = new Empresa();
    this.empresaServicio.obtenerEmpresaPorId(this.id).subscribe((dato) => {
      this.empresa = dato;
      swal(`Detalles de la empresa ${this.empresa.nombre}`);
    });
  }
}
