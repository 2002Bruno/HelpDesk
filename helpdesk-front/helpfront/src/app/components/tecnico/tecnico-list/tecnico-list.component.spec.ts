import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoListComponent } from './tecnico-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { MatTableModule } from "@angular/material/table";

describe('TecnicoListComponent', () => {
  let component: TecnicoListComponent;
  let fixture: ComponentFixture<TecnicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoListComponent ],
      imports: [
        MatTableModule,
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
