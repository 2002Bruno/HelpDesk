import { TestBed } from '@angular/core/testing';

import { ChamadoService } from './chamado.service';
import { HttpClientModule } from "@angular/common/http";
import { ChamadoModel } from "../models/chamado";

describe('ChamadoService', () => {
  let service: ChamadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(ChamadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste para cadastro de chamado ', function () {

    const chamadoMock: ChamadoModel = {
      id: null,
      titulo: 'Teste cadastro chamado',
      status: '0',
      prioridade: '2',
      tecnico: 1,
      nomeTecnico: 'Antonio Pereira da Silva',
      cliente: 2,
      nomeCliente: 'Rivaldo Jesus da conseição',
      dataAbertura: '',
      dataFechamento: '',
      observacoes: 'testando mock para cadastro de chamado'

    }

    service.create(chamadoMock).subscribe(response => {

      expect(response).toEqual(chamadoMock);
    })

  });

  it('Teste para cadastro de chamado ', function () {

    const chamadoMock: ChamadoModel = {
      id: 1,
      titulo: 'Teste cadastro chamado',
      status: '0',
      prioridade: '2',
      tecnico: 1,
      nomeTecnico: 'Antonio Pereira da Silva',
      cliente: 2,
      nomeCliente: 'Rivaldo Jesus da conseição',
      dataAbertura: '',
      dataFechamento: '',
      observacoes: 'testando mock para cadastro de chamado'

    }

    service.update(chamadoMock).subscribe(response => {

      expect(response).toEqual(chamadoMock);
    });

  });
});
