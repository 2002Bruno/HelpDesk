import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoReadComponent } from './chamado-read.component';
import { ChamadoUpdateComponent } from "../chamado-update/chamado-update.component";
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
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('ChamadoReadComponent', () => {
  let component: ChamadoReadComponent;
  let fixture: ComponentFixture<ChamadoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoUpdateComponent, ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ToastrModule.forRoot()
      ],
      providers: [
        TecnicoService,
        ToastrService
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA],
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
