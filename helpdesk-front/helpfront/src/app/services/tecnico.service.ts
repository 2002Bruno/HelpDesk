import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api-config";
import { Observable } from "rxjs";
import { TecnicoModel } from "../models/tecnico";

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<TecnicoModel[]> {
    return this.http.get<TecnicoModel[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }

  create(tecnico: TecnicoModel): Observable<TecnicoModel> {
    return this.http.post<TecnicoModel>(`${API_CONFIG.baseUrl}/tecnicos`, tecnico);
  }

  findById(id: any): Observable<TecnicoModel> {
    return this.http.get<TecnicoModel>(`${API_CONFIG.baseUrl}/tecnicos/${id}`);
  }

  update(tecnico: TecnicoModel): Observable<TecnicoModel> {
    return this.http.put<TecnicoModel>(`${API_CONFIG.baseUrl}/tecnicos/${tecnico.id}`, tecnico);
  }
}
