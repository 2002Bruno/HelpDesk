import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";
import { ClienteModel } from "../../../models/cliente";

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

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
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');

    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(response => {
      response.perfis = [];
      this.cliente = response;
    });
  }

  onSubmit(): void {
    this.clienteService.update(this.cliente).subscribe(response => {
      this.toast.success('Cliente atualizado com sucesso', 'Edição');
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
