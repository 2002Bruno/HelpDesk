import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  clienteForm: FormGroup;
  clienteId: any;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
  this.inicializarForm();

    this.findById();
  }

  inicializarForm() {
    this.clienteForm = new FormGroup({

      id: new FormControl(this.clienteId, Validators.required),
      nome: new FormControl(null, [Validators.minLength(3), Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      email: new FormControl(null),
      senha: new FormControl(null, [Validators.minLength(3), Validators.required]),
    });
  }

  preencherForm(cliente) {
    this.clienteForm = this.formBuilder.group({
      id: [cliente.id],
      nome: [cliente.nome],
      cpf: [cliente.cpf],
      email: [cliente.email],
      senha: [cliente.senha],
    });

    this.clienteForm.controls['email'].disable();
  }

  findById(): void {
    this.clienteService.findById(this.clienteId).subscribe(response => {

      this.preencherForm(response);
    });
  }

  onSubmit(): void {
    this.clienteForm.value.email = this.clienteForm['controls']['email'].value;

    this.clienteService.update(this.clienteForm.value).subscribe(response => {
      this.toast.success('Cliente atualizado com sucesso', 'Edição');
      this.router.navigate(['/clientes']);
    }, error => {
      this.toast.error('Ocorreu um erro ao tentar fazer a atualização dos dados do cliente, verifique os capos e veja se o cpf é válido!', 'Erro');
    });
  }

  validarCampos() {
    return this.clienteForm.valid;
  }

  voltar() {
    this.router.navigate(['/clientes']);
  }
}
