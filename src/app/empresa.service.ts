import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  //obtiene el listado de todos los empresas en el backend
  private baseURL = 'http://localhost:8080/api/v1/empresas';

  constructor(private httpClient: HttpClient) {}

  //Obtener los empresas
  obtenerListaDeEmpresas(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(`${this.baseURL}`);
  }

  //registra un empresas
  registrarEmpresa(empresa: Empresa): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empresa);
  }

  //este metodo sirve para actualizar el empresas
  actualizarEmpresa(id: number, empresa: Empresa): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, empresa);
  }

  //este metodo sirve para obtener o buscar un empresa
  obtenerEmpresaPorId(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(`${this.baseURL}/${id}`);
  }

  eliminarEmpresa(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
