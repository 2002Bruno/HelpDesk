import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponentComponent } from './nav-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe('NavComponentComponent', () => {
  let component: NavComponentComponent;
  let fixture: ComponentFixture<NavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponentComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot()
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
