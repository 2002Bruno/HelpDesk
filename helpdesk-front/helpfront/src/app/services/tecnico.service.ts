import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {API_CONFIG} from "../config/api-config";
import {Observable} from "rxjs";
import {TecnicoModel} from "../models/tecnico";

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<TecnicoModel[]> {
    return this.http.get<TecnicoModel[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }
}
