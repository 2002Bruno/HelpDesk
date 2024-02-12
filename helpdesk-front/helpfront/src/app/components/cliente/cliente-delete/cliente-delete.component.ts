import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";
import { ClienteModel } from "../../../models/cliente";

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: ClienteModel = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
  }

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

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(response => {
      this.toast.success('Cliente deletado com sucesso', 'Exclusão');
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

  voltar() {
    this.router.navigate(['/clientes']);
  }
}
