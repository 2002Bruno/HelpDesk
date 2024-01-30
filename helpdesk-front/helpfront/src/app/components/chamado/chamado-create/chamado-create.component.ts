import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { TecnicoModel } from "../../../models/tecnico";
import { ClienteModel } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {

  tecnicos: TecnicoModel[] = [];
  clientes: ClienteModel[] = [];

  chamadoForm: FormGroup;

  titulo: FormControl = new  FormControl(null, Validators.required);
  status: FormControl = new  FormControl(null, Validators.required);
  prioridade: FormControl = new  FormControl(null, Validators.required);
  // nomeTecnico: FormControl = new  FormControl(null, Validators.required);
  // nomeCliente: FormControl = new  FormControl(null, Validators.required);
  descricao: FormControl = new  FormControl(null, Validators.required);
  tecnico: FormControl = new  FormControl(null, Validators.required);
  cliente: FormControl = new  FormControl(null, Validators.required);

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.listaDeTecnicos();
    this.listaDeClientes();
  }

  validarCampos() {
    return this.titulo.valid &&
      this.tecnico.valid &&
      this.cliente.valid &&
      this.prioridade.valid &&
      this.prioridade.valid
  }

  listaDeTecnicos() {
    this.tecnicoService.findAll().subscribe(response => {
      this.tecnicos = response;
    });
  }

  listaDeClientes() {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    });
  }

  onSubmit(chamdoForm: any) {
    console.log('chamadoForm', this.chamadoForm);
  }

  voltar() {

  }
}
