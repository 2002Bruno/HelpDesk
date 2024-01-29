import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClienteModel } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  cliente: ClienteModel = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(11)]);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private toast: ToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clienteService.create(this.cliente).subscribe(response => {
      this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['/clientes']);
    }, error => {
      if (error?.error.errors) {
        error.error.errors.array.forEach(element => {
          this.toast.error(element.message());
        })
      } else {
        this.toast.error(error.error.message);
      }
    });
  }

  addPerfil(perfil: any): void {
    this.cliente.perfis.push(perfil);

    if (this.cliente.perfis.includes(perfil)) {
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    } else {
      this.cliente.perfis.push(perfil);
    }
  }

  validarCampos() {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

  voltar() {
    this.router.navigate(['/clientes']);
  }
}
