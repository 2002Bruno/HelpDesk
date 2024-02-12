import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../../services/cliente.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

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

    this.clienteForm.controls['nome'].disable();
    this.clienteForm.controls['cpf'].disable();
    this.clienteForm.controls['email'].disable();
    this.clienteForm.controls['senha'].disable();
  }

  findById(): void {
    this.clienteService.findById(this.clienteId).subscribe(response => {

      this.preencherForm(response);
    });
  }

  delete(): void {
    this.clienteService.delete(this.clienteForm.value.id).subscribe(response => {
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
