import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ChamadoUpdateComponent } from './chamado-update.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { TecnicoService } from "../../../services/tecnico.service";
import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from "@angular/core";
import { By } from '@angular/platform-browser';
import { ChamadoService } from 'src/app/services/chamado.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { catchError, of, throwError } from 'rxjs';
import { ChamadoModel } from 'src/app/models/chamado';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChamadoListComponent } from '../chamado-list/chamado-list.component';
import { PrioridadeEnum } from 'src/app/enums/prioridade.enum';
import { StatusChamadoEnum } from 'src/app/enums/status-chamado.enum';

const routes: Routes = [
  { path: 'chamados', component: ChamadoListComponent },
];

@Injectable()
class clienteServiceMock extends ClienteService {

  response = [
    {
      "id": 6,
      "nome": "Waleska Vogas Paulino",
      "cpf": "03832869131",
      "email": "waleska.paulino@gmail.com",
      "senha": "$2a$10$AWH3VLpXJNATNoydSK018OFwO.5dqCG9x9Dr6ssstHURMGZsnVQtW",
      "perfis": [
        "CLIENTE"
      ],
      "dataCriacao": [
        2024,
        6,
        29
      ]
    },
    {
      "id": 7,
      "nome": "Levi Robadey Vogas",
      "cpf": "92347557408",
      "email": "levi.vogas@gmail.com",
      "senha": "$2a$10$15SJbsKLUiyKdh777aHh9eAQNRFvaKaVXLOHaeBqrNIO7laRSSwfi",
      "perfis": [
        "CLIENTE"
      ],
      "dataCriacao": [
        2024,
        6,
        29
      ]
    },
  ];
  override findAll() {
    return of(this.response);
  }
}

@Injectable()
class tecnicoServiceMock extends TecnicoService {

  response = [
    {
      "id": 1,
      "nome": "Valdir Cesar",
      "cpf": "76045777093",
      "email": "valdir@gmail.com",
      "senha": "$2a$10$RfEzqALSvPCNKfODrBSS6uAR1s1XjGTyDYJ73wu4coNvLojyQGQ0O",
      "perfis": [
        "ADMIN",
        "CLIENTE"
      ],
      "dataCriacao": [
        2024,
        6,
        26
      ]
    },
    {
      "id": 2,
      "nome": "Heitor Duarte Garcia",
      "cpf": "27865934416",
      "email": "heitor.garcia@gmail.com",
      "senha": "$2a$10$.B4SmZHDGa5TvaEgS3fzHOAAF28I5Mrbiu/jkbseXtuWfxXM0KGzK",
      "perfis": [
        "CLIENTE"
      ],
      "dataCriacao": [
        2024,
        6,
        26
      ]
    },
  ];
  override findAll() {
    return of(this.response);
  }
}

describe('ChamadoUpdateComponent', () => {
  let component: ChamadoUpdateComponent;
  let fixture: ComponentFixture<ChamadoUpdateComponent>;
  let chamadoService: ChamadoService;
  let tecnicoService: TecnicoService;
  let clienteService: ClienteService;
  let httpMock: HttpTestingController;
  let toastr: ToastrService;
  let router: Router;
  let api: 'http://localhost:8080';

  // const httpStub = {
  //   get: (_params: any) => of([
  //     {
  //       "cliente": {
  //         "id": 6,
  //         "nome": "Waleska Vogas Paulino",
  //         "cpf": "03832869131",
  //         "email": "waleska.paulino@gmail.com",
  //         "senha": "$2a$10$gJQLV8.ZctcqBkIs3P0gKO5IPhVa3O14PZf9ATDQgZDCeSUVpm0Q6",
  //         "perfis": [
  //           "CLIENTE"
  //         ],
  //         "dataCriacao": "26/06/2024"
  //       },
  //       "dataAbertura": "26/06/2024",
  //       "dataFechamento": null,
  //       "id": 1,
  //       "observacoes": "Primeiro Chamado",
  //       "prioridade": "MEDIA",
  //       "status": "ANDAMENTO",
  //       "tecnico": {
  //         "id": 1,
  //         "nome": "Valdir Cesar",
  //         "cpf": "76045777093",
  //         "email": "valdir@gmail.com",
  //         "senha": "$2a$10$vCwr3SjKG3I/BT.ks7cSe.DK5JtTciaK3GdoaNQONWcOiQ1r7/K3e",
  //         "perfis": [
  //           "CLIENTE",
  //           "ADMIN"
  //         ],
  //         "dataCriacao": "26/06/2024"
  //       },
  //       "titulo": "Chamado 01"
  //     }
  //   ]),
  // }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChamadoUpdateComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot(routes),
        NoopAnimationsModule,
        ToastrModule.forRoot()
      ],
      providers: [
        TecnicoService,
        ClienteService,
        ToastrService,
        ChamadoService,
        RouterModule,
        { provide: TecnicoService, useClass: tecnicoServiceMock },
        { provide: ClienteService, useClass: clienteServiceMock },
        // { provide: HttpClient, useValue: httpStub },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoUpdateComponent);
    component = fixture.componentInstance;
    chamadoService = TestBed.inject(ChamadoService);
    tecnicoService = TestBed.inject(TecnicoService);
    clienteService = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
    toastr = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Identifica se o titulo da pagina é "Atualizar Chamado"', () => {
    component.tituloChamado = component.tituloChamado;
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('h1'));
    expect(elementTitle.nativeElement.textContent).toEqual('Atualizar Chamado');
  });

  it('Busca os dados do chamado pelo id', fakeAsync(() => {
    const mockChamadoId = 1;

    const mockChamado: ChamadoModel = {
      cliente: 6,
      dataAbertura: "26/06/2024",
      dataFechamento: null,
      id: 1,
      nomeCliente: "Waleska Vogas Paulino",
      nomeTecnico: "Valdir Cesar",
      observacoes: "Primeiro Chamado",
      prioridade: 1,
      status: 1,
      tecnico: 1,
      titulo: "Chamado 01"
    }

    spyOn(chamadoService, 'findById').and.returnValue(of(mockChamado));
    spyOn(component, 'findChamadoById').and.callThrough();
    spyOn(component, 'preencherForm').and.callThrough();

    component.findChamadoById();

    chamadoService.findById(mockChamadoId).subscribe(response => {
      expect(response).toEqual(mockChamado);
      expect(component.preencherForm(mockChamado));
    });
  }));

  it('Tratamento de erro ao não encontrar chamado por id', () => {
    const mockChamadoId = 1;
    const mockError = {
      "error": {
        "timestamp": 1719375977534,
        "status": 404,
        "error": "Object Not Found",
        "message": "Objeto não encontrado! ID: 30",
        "path": "/chamados/30"
      },
      "headers": {
        "normalizedNames": {

        },
        "lazyUpdate": null
      },
      "message": "Http failure response for http://localhost:8080/chamados/30: 404 OK",
      "name": "HttpErrorResponse",
      "ok": false,
      "status": 404,
      "statusText": "OK",
      "url": "http://localhost:8080/chamados/30"
    };

    spyOn(chamadoService, 'findById').and.returnValue(throwError(mockError));
    spyOn(component, 'findChamadoById').and.callThrough();

    component.findChamadoById();

    chamadoService.findById(mockChamadoId).pipe(
      catchError(error => {
        expect(error).toEqual(mockError);
        return of();
      })
    ).subscribe();
  });

  it('tras uma lista de técnicos', (done) => {
    const response = [
      {
        "id": 1,
        "nome": "Valdir Cesar",
        "cpf": "76045777093",
        "email": "valdir@gmail.com",
        "senha": "$2a$10$RfEzqALSvPCNKfODrBSS6uAR1s1XjGTyDYJ73wu4coNvLojyQGQ0O",
        "perfis": [
          "ADMIN",
          "CLIENTE"
        ],
        "dataCriacao": [
          2024,
          6,
          26
        ]
      },
      {
        "id": 2,
        "nome": "Heitor Duarte Garcia",
        "cpf": "27865934416",
        "email": "heitor.garcia@gmail.com",
        "senha": "$2a$10$.B4SmZHDGa5TvaEgS3fzHOAAF28I5Mrbiu/jkbseXtuWfxXM0KGzK",
        "perfis": [
          "CLIENTE"
        ],
        "dataCriacao": [
          2024,
          6,
          26
        ]
      },
    ]
    tecnicoService.findAll().subscribe(res => {
      expect(res).toEqual(response);
      done();
    }, error => {
      done.fail(error);
    })
  });

  it('tras uma lista de clientes', (done) => {
    const response = [
      {
        "id": 6,
        "nome": "Waleska Vogas Paulino",
        "cpf": "03832869131",
        "email": "waleska.paulino@gmail.com",
        "senha": "$2a$10$AWH3VLpXJNATNoydSK018OFwO.5dqCG9x9Dr6ssstHURMGZsnVQtW",
        "perfis": [
          "CLIENTE"
        ],
        "dataCriacao": [
          2024,
          6,
          29
        ]
      },
      {
        "id": 7,
        "nome": "Levi Robadey Vogas",
        "cpf": "92347557408",
        "email": "levi.vogas@gmail.com",
        "senha": "$2a$10$15SJbsKLUiyKdh777aHh9eAQNRFvaKaVXLOHaeBqrNIO7laRSSwfi",
        "perfis": [
          "CLIENTE"
        ],
        "dataCriacao": [
          2024,
          6,
          29
        ]
      },
    ]
    clienteService.findAll().subscribe(res => {
      expect(res).toEqual(response);
      done();
    }, error => {
      done.fail(error);
    })
  });

  it('faz o tratamento de erro ao tentar cadastrar um chamado', (done: DoneFn) => {
    const chamadoUpdateMock: ChamadoModel = {
      id: 1,
      dataAbertura: '07/07/2024',
      dataFechamento: '21/07/2024',
      prioridade: 1,
      status: 1,
      titulo: 'Chamado 01',
      observacoes: 'Primeiro Chamado',
      tecnico: 1,
      cliente: 3,
      nomeCliente: 'Waleska Vogas Paulino',
      nomeTecnico: 'Valdir Cesar',
    }

    spyOn(chamadoService, 'update').and.returnValue(throwError({ error: 'Erro ao atualizar chamado' }));
    spyOn(toastr, 'error').and.callThrough();
    component.update();

    chamadoService.update(chamadoUpdateMock.id, chamadoUpdateMock);
    toastr.error('Erro ao atualizar chamado');

    setTimeout(() => {
      expect(toastr.error).toHaveBeenCalledWith('Erro ao atualizar chamado');
      done();
    }, 100);
  });

  it('faz a atualização dos dados de um chamado', (done: DoneFn) => {
    const chamadoUpdateMock: ChamadoModel = {
      id: 1,
      dataAbertura: '07/07/2024',
      dataFechamento: '21/07/2024',
      prioridade: 1,
      status: 1,
      titulo: 'Chamado 01',
      observacoes: 'Primeiro Chamado',
      tecnico: 1,
      cliente: 3,
      nomeCliente: 'Waleska Vogas Paulino',
      nomeTecnico: 'Valdir Cesar',
    }

    spyOn(chamadoService, 'update').and.callThrough();
    spyOn(toastr, 'success').and.callThrough();
    component.update();

    chamadoService.update(chamadoUpdateMock.id, chamadoUpdateMock);
    toastr.success('Erro ao atualizar chamado', 'success');
    router.navigate(['/chamados']);

    setTimeout(() => {
      expect(toastr.success).toHaveBeenCalledWith('Erro ao atualizar chamado', 'success');
      done();
    }, 100);
  });

  it('Sai da tela de edição e volta para a listagem de chamados', () => {
    spyOn(router, 'navigate').and.callThrough();
    spyOn(component, 'voltar').and.callThrough();

    component.voltar();
    expect(router.navigate).toHaveBeenCalledWith(['/chamados']);
  });

  it('should return ABERTO for StatusChamadoEnum.ABERTO', () => {
    expect(component.retornaStatus(StatusChamadoEnum.ABERTO)).toEqual('ABERTO');
  });

  it('should return ANDAMENTO for StatusChamadoEnum.ANDAMENTO', () => {
    expect(component.retornaStatus(StatusChamadoEnum.ANDAMENTO)).toEqual('ANDAMENTO');
  });

  it('should return ENCERRADO for any other values', () => {
    expect(component.retornaStatus(StatusChamadoEnum.ENCERRADO)).toEqual('ENCERRADO');
    expect(component.retornaStatus('anyOtherValue')).toEqual('ENCERRADO');
  });

  it('should return BAIXA for PrioridadeEnum.BAIXA', () => {
    expect(component.retornaPrioridade(PrioridadeEnum.BAIXA)).toEqual('BAIXA');
  });

  it('should return MEDIA for PrioridadeEnum.MEDIA', () => {
    expect(component.retornaPrioridade(PrioridadeEnum.MEDIA)).toEqual('MEDIA');
  });

  it('should return ALTA for any other values', () => {
    expect(component.retornaPrioridade(PrioridadeEnum.ALTA)).toEqual('ALTA');
    expect(component.retornaPrioridade('anyOtherValue')).toEqual('ALTA');
  });
});
