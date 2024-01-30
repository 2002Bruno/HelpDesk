import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoListComponent } from './chamado-list.component';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { ClienteService } from "../../../services/cliente.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('ChamadoListComponent', () => {
  let component: ChamadoListComponent;
  let fixture: ComponentFixture<ChamadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoListComponent ],
      imports: [
        MatTableModule,
        HttpClientModule
      ],
      providers: [
        ClienteService,
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
