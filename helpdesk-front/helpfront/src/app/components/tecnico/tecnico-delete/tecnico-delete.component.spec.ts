import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDeleteComponent } from './tecnico-delete.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { TecnicoService } from "../../../services/tecnico.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TecnicoModel } from "../../../models/tecnico";

describe('TecnicoDeleteComponent', () => {
  let component: TecnicoDeleteComponent;
  let fixture: ComponentFixture<TecnicoDeleteComponent>;
  let tecnicoService: TecnicoService;
  let toast: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoDeleteComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        TecnicoService,
        ToastrService
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDeleteComponent);
    tecnicoService = TestBed.inject(TecnicoService);
    toast = TestBed.inject(ToastrService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste para Deletar técnico', () => {

    const id = 1;
    const tecnico: TecnicoModel = {
      id: 2,
      perfis: ['1', '2'],
      nome: 'Gabriel Pereira',
      cpf:  '08309717180',
      senha: '1234',
      email: 'mockTeste@gmail.com',
      dataCriacao: new Date(),
    }
    spyOn(component, 'delete');
  });

  it('should set the perfis property to an empty array after calling findById', () => {
    spyOn(tecnicoService, 'findById');

    component.findById();

    expect(tecnicoService.findById).toHaveBeenCalledWith(component.tecnico.id);

    expect(component.tecnico.perfis).toEqual([]);
  });
});
