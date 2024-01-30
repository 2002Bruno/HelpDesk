import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoUpdateComponent } from './chamado-update.component';

describe('ChamadoUpdateComponent', () => {
  let component: ChamadoUpdateComponent;
  let fixture: ComponentFixture<ChamadoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
