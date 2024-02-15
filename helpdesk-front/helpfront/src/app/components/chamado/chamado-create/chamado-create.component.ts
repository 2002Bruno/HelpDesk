import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { TecnicoModel } from "../../../models/tecnico";
import { ClienteModel } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";
import { ChamadoService } from "../../../services/chamado.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

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
  observacoes: FormControl = new  FormControl(null, Validators.required);
  tecnico: FormControl = new  FormControl(null, Validators.required);
  cliente: FormControl = new  FormControl(null, Validators.required);

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaDeTecnicos();
    this.listaDeClientes();

    this.inicializarForm();
  }

  inicializarForm() {
    this.chamadoForm = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      prioridade: new FormControl(null, Validators.required),
      observacoes: new FormControl(null, Validators.required),
      tecnico: new FormControl(null, Validators.required),
      cliente: new FormControl(null, Validators.required),
    });
  }

  create(): void {
    this.chamadoService.create(this.chamadoForm.value).subscribe(response => {
      this.toast.success('Chamado cadastrado com sucesso', 'Success');
      this.router.navigate(['/chamados']);
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }


  validarCampos() {
    return this.chamadoForm.valid
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

  voltar() {
    this.router.navigate(['/chamados']);
  }
}
