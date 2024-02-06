import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { API_CONFIG } from "../../config/api-config";
import { Credenciais } from "../../models/credenciais";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

describe('AuthServiceService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let jwtService: JwtHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [AuthService, JwtHelperService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    jwtService = TestBed.inject(JwtHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Verifica se as credenciáis são válidas', () => {
  //   const mockCredenciais: Credenciais = { email: 'usuario', senha: '1234' };
  //
  //   service.authenticate(mockCredenciais).subscribe(response => {
  //     expect(response).toBeTruthy(); // Verifica se a resposta é verdadeira (algum valor foi recebido)
  //   });
  //
  //   const req = httpTestingController.expectOne(`${API_CONFIG.baseUrl}/login`);
  //
  //   // Verifica se a solicitação é uma solicitação POST
  //   expect(req.request.method).toEqual('POST');
  //
  //   // Verifica se as credenciais foram enviadas corretamente no corpo da solicitação
  //   expect(req.request.body).toEqual(mockCredenciais);
  //
  //   // Completa a solicitação simulada retornando uma resposta de sucesso
  //   req.flush('token', { status: 200, statusText: 'OK', headers: { 'Authorization': 'Bearer token' } });
  // });
  //
  // it('Se o login foi feito com sucesso, ele seta o token da autenticação', () => {
  //   const token = 'testToken';
  //
  //   expect(service.successfulLogin(token));
  // });
  //
  // it('Verifica se o logout foi feito com sucesso',  () => {
  //
  //   localStorage.setItem('token', 'fakeToken');
  //
  //   service.logout();
  //
  //   spyOn(localStorage, 'clear');
  //
  //   expect(localStorage.getItem('token')).toBeNull();
  // });
  //
  // it('Verifica se o token não está expirado',  () => {
  //   localStorage.setItem('token', 'fakeToken');
  //
  //   spyOn(localStorage, 'getItem').and.returnValue('token');
  //   spyOn(jwtService, 'isTokenExpired').and.returnValue(false);
  //
  //   const isAuthenticated = service.isAuthenticated();
  //
  //   expect(isAuthenticated).toBe(true);
  //   expect(localStorage.getItem).toHaveBeenCalledWith('token');
  //   expect(jwtService.isTokenExpired).toHaveBeenCalledWith('valid_token');
  // });
  //
  // it('deve retornar falso se o token for nulo', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(null);
  //
  //   const isAuthenticated = service.isAuthenticated();
  //
  //   expect(isAuthenticated).toBe(false);
  //   expect(localStorage.getItem).toHaveBeenCalledWith('token');
  //   expect(jwtService.isTokenExpired).not.toHaveBeenCalled();
  // });
});
