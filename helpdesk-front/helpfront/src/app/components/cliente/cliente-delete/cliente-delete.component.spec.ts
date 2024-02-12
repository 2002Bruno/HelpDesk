import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDeleteComponent } from './cliente-delete.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ClienteService } from "../../../services/cliente.service";

describe('ClienteDeleteComponent', () => {
  let component: ClienteDeleteComponent;
  let fixture: ComponentFixture<ClienteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDeleteComponent ],
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
    fixture = TestBed.createComponent(ClienteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
