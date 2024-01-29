import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoListComponent } from './chamado-list.component';

describe('ChamadoListComponent', () => {
  let component: ChamadoListComponent;
  let fixture: ComponentFixture<ChamadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoListComponent ]
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
