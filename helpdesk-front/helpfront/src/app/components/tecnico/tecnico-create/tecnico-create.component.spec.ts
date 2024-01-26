import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoCreateComponent } from './tecnico-create.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('TecnicoCreateComponent', () => {
  let component: TecnicoCreateComponent;
  let fixture: ComponentFixture<TecnicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoCreateComponent ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
