import { TestBed } from '@angular/core/testing';

import { TecnicoService } from './tecnico.service';
import { HttpClientModule } from "@angular/common/http";
import { TecnicoModel } from "../models/tecnico";

describe('TecnicoService', () => {
  let service: TecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(TecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Teste para deletar técnico', function () {
  //
  //   expect(service.delete(1));
  // });
  //
  // it('Teste para cadastro de um técnico', function () {
  //
  //   const tecnico: TecnicoModel = {
  //     id: null,
  //     perfis: ['1', '2'],
  //     nome: 'Gabriel Pereira',
  //     cpf: '776.458.390-15',
  //     senha: '1234',
  //     email: 'mockTeste@gmail.com',
  //     dataCriacao: new Date(),
  //   }
  //
  //   expect(service.create(tecnico));
  // });
  //
  // it('Teste para Atualização de dados do técnico ', function () {
  //
  //   const tecnico: TecnicoModel = {
  //     id: 2,
  //     perfis: ['1', '2'],
  //     nome: 'Gabriel Pereira',
  //     cpf:  '08309717180',
  //     senha: '1234',
  //     email: 'mockTeste@gmail.com',
  //     dataCriacao: new Date(),
  //   }
  //
  //   expect(service.update(tecnico).subscribe());
  // });
});
