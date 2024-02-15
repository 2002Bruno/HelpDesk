import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private toast: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.clienteForm = new FormGroup({
      nome: new FormControl(null, [Validators.minLength(3), Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      senha: new FormControl(null, [Validators.minLength(3), Validators.required]),
    });
  }

  onSubmit(): void {
    this.clienteService.create(this.clienteForm.value).subscribe(response => {
      this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['/clientes']);
    }, error => {
      this.toast.error('Ocorreu um erro ao tentar fazer o cadastro do cliente, verifique os capos e veja se o cpf é válido!', 'Erro');
    });
  }

  validarCampos() {
    return this.clienteForm.valid;
  }

  voltar() {
    this.router.navigate(['/clientes']);
  }
}
