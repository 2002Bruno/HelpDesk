import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponentComponent } from './nav-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavComponentComponent', () => {
  let component: NavComponentComponent;
  let fixture: ComponentFixture<NavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponentComponent ],
      imports: [
        RouterTestingModule,
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
