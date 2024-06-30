import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ToastrService, MatCardModule, MatButtonModule, FormsModule, CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      senha: new FormControl(null, [Validators.minLength(3), Validators.required]),
    });
  }

  logar() {
    this.service.authenticate(this.loginForm.value).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.toast.success('Login realizado com sucesso!', 'Success');
      this.router.navigate(['']);
    }, () => {
      this.loginForm.get('email').setValue('');
      this.loginForm.get('senha').setValue('');
      this.toast.error('Usuário e/ou senha inválidos!');
    });
  }

  validarCampos(): boolean {
    return this.loginForm.valid;
  }
}
