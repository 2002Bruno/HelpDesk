import { Component, OnInit } from '@angular/core';
import { TecnicoModel } from "../../../models/tecnico";
import { ClienteModel } from "../../../models/cliente";
import { ChamadoModel } from "../../../models/chamado";
import { FormControl, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { ClienteService } from "../../../services/cliente.service";
import { ChamadoService } from "../../../services/chamado.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { StatusChamadoEnum } from "../../../enums/status-chamado.enum";
import { PrioridadeEnum } from "../../../enums/prioridade.enum";

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.scss']
})
export class ChamadoReadComponent implements OnInit {

  tecnicos: TecnicoModel[] = [];
  clientes: ClienteModel[] = [];

  chamado: ChamadoModel = {
    prioridade: null,
    status: null,
    titulo: '',
    observacoes: '',
    tecnico: null,
    cliente: null,
    nomeTecnico: '',
    nomeCliente: '',
  };

  titulo: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);
  status: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);
  prioridade: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);
  observacoes: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);
  tecnico: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);
  cliente: FormControl = new FormControl({ value: '', disabled: true }, Validators.required);

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findChamadoById();
    this.listaDeTecnicos();
    this.listaDeClientes();
  }

  findChamadoById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(response => {
      this.chamado = response;
    }, ex => {
      this.toast.error(ex.error.error);
    });
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

  retornaStatus(status: any) {

    if (status == StatusChamadoEnum.ABERTO) {
      return 'ABERTO';
    } else if (status == StatusChamadoEnum.ANDAMENTO) {
      return 'ANDAMENTO';
    } else {
      return 'ENCERRADO';
    }
  }

  retornaPrioridade(prioridade: any) {

    if (prioridade == PrioridadeEnum.BAIXA) {
      return 'BAIXA';
    } else if (prioridade == PrioridadeEnum.MEDIA) {
      return 'MEDIA';
    } else {
      return 'ALTA';
    }
  }
}
