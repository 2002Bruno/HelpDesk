import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ToastrService]
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
      this.toast.error('Usuário e/ou senha inválidos!');
    });
  }

  validarCampos(): boolean {
    return this.loginForm.valid;
  }
}
