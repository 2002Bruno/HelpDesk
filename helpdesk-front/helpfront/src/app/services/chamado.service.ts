import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api-config";
import { ChamadoModel } from "../models/chamado";

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<ChamadoModel[]> {
    return this.http.get<ChamadoModel[]>(`${API_CONFIG.baseUrl}/chamados`);
  }

  create(chamado: ChamadoModel): Observable<ChamadoModel> {
    return this.http.post<ChamadoModel>(`${API_CONFIG.baseUrl}/chamados`, chamado);
  }
}
