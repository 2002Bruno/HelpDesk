import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { ClienteService } from "./cliente.service";
import { ClienteModel } from "../models/cliente";

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Teste para deletar cliente', function () {
  //
  //   expect(service.delete(1));
  // });
  //
  //
  // it('Teste para cadastro de um técnico', function () {
  //
  //   const cliente: ClienteModel = {
  //     id: null,
  //     perfis: ['1', '2'],
  //     nome: 'Gabriel Pereira',
  //     cpf: '776.458.390-15',
  //     senha: '1234',
  //     email: 'mockTeste@gmail.com',
  //     dataCriacao: new Date(),
  //   }
  //
  //   service.create(cliente).subscribe(response => {
  //
  //
  //     expect(response).toEqual(cliente);
  //   });
  // });

  // it('Teste para Atualização de dados do Cliente ', function () {
  //
  //   const cliente: ClienteModel = {
  //     id: 2,
  //     perfis: ['1', '2'],
  //     nome: 'Gabriel Pereira',
  //     cpf:  '88602786000',
  //     senha: '1234',
  //     email: 'mockTeste@gmail.com',
  //     dataCriacao: new Date(),
  //   }
  //
  //   service.update(cliente).subscribe((response) => {
  //     expect(response).toEqual(cliente);
  //   });
  // });
});
