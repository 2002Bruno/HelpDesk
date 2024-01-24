import { Component, OnInit } from '@angular/core';
import {Credenciais} from "../../models/credenciais";
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

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

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  logar() {
    this.toast.error('Usuário e/ou senha incorretos', 'Login');
    this.senha.setValue('');
  }

  validarCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }

}
