import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDeleteComponent } from './tecnico-delete.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { TecnicoService } from "../../../services/tecnico.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('TecnicoDeleteComponent', () => {
  let component: TecnicoDeleteComponent;
  let fixture: ComponentFixture<TecnicoDeleteComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
