import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoReadComponent } from './chamado-read.component';

describe('ChamadoReadComponent', () => {
  let component: ChamadoReadComponent;
  let fixture: ComponentFixture<ChamadoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoReadComponent ]
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
