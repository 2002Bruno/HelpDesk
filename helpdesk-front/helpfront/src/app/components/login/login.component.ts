import { Component, OnInit } from '@angular/core';
import { Credenciais } from "../../models/credenciais";
import { FormControl, Validators } from "@angular/forms";
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

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos!');
    });
  }

  validarCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
