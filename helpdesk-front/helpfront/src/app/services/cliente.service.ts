import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api-config";
import { Observable } from "rxjs";
import { ClienteModel } from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  create(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${API_CONFIG.baseUrl}/clientes`, cliente);
  }

  findById(id: any): Observable<ClienteModel> {
    return this.http.get<ClienteModel>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

  update(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.put<ClienteModel>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<ClienteModel> {
    return this.http.delete<ClienteModel>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }
}
