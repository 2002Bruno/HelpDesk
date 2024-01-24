import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//Para trabalhar com formulários no Angular
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Para realizar requisições HTTP
import { HttpClientModule } from "@angular/common/http";

//Imports para componentes do Angular Material
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        //Forms
        FormsModule,
        ReactiveFormsModule,
        //Requisições HTTP
        HttpClientModule,
        // Angular Material
        MatFormFieldModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatSelectModule,
        MatTableModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatCardModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        [CUSTOM_ELEMENTS_SCHEMA]
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
