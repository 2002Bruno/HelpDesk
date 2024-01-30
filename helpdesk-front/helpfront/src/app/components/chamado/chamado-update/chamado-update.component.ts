import { Component, OnInit } from '@angular/core';
import { TecnicoModel } from "../../../models/tecnico";
import { ClienteModel } from "../../../models/cliente";
import { ChamadoModel } from "../../../models/chamado";
import { FormControl, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { ClienteService } from "../../../services/cliente.service";
import { ChamadoService } from "../../../services/chamado.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute , Router } from "@angular/router";
import { StatusChamadoEnum } from "../../../enums/status-chamado.enum";
import { PrioridadeEnum } from "../../../enums/prioridade.enum";

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

  tecnicos: TecnicoModel[] = [];
  clientes: ClienteModel[] = [];

  chamado: ChamadoModel = {
    prioridade: '',
    status: '',
    titulo: '',
    observacoes: '',
    tecnico: null,
    cliente: null,
    nomeTecnico: '',
    nomeCliente: '',
  };

  titulo: FormControl = new FormControl(null, Validators.required);
  status: FormControl = new FormControl(null, Validators.required);
  prioridade: FormControl = new FormControl(null, Validators.required);
  observacoes: FormControl = new FormControl(null, Validators.required);
  tecnico: FormControl = new FormControl(null, Validators.required);
  cliente: FormControl = new FormControl(null, Validators.required);

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

  update(): void {
    this.chamadoService.update(this.chamado).subscribe(response => {
      this.toast.success('Chamado atualizado com sucesso', 'Success');
      this.router.navigate(['/chamados']);
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

  validarCampos() {
    return this.titulo.valid &&
      this.tecnico.valid &&
      this.cliente.valid &&
      this.prioridade.valid &&
      this.status.valid &&
      this.observacoes.valid
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
