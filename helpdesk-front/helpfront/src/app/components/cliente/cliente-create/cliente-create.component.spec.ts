import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateComponent } from './cliente-create.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";

describe('TecnicoCreateComponent', () => {
  let component: ClienteCreateComponent;
  let fixture: ComponentFixture<ClienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreateComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        ClienteService,
        ToastrService
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
