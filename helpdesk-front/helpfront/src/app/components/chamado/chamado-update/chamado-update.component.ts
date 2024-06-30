import { Component, OnInit } from '@angular/core';
import { TecnicoModel } from "../../../models/tecnico";
import { ClienteModel } from "../../../models/cliente";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { ClienteService } from "../../../services/cliente.service";
import { ChamadoService } from "../../../services/chamado.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { StatusChamadoEnum } from "../../../enums/status-chamado.enum";
import { PrioridadeEnum } from "../../../enums/prioridade.enum";

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

  tituloChamado = 'Atualizar Chamado';

  tecnicos: TecnicoModel[] = [];
  clientes: ClienteModel[] = [];

  chamadoForm: FormGroup;
  chamadoId: any;

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.chamadoId = this.route.snapshot.paramMap.get('id');

    this.inicializarForm();
    this.findChamadoById();
    this.listaDeTecnicos();
    this.listaDeClientes();
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

  findChamadoById(): void {
    this.chamadoService.findById(this.chamadoId).subscribe(response => {

      this.preencherForm(response);
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

  preencherForm(chamado) {
    this.chamadoForm = this.formBuilder.group({
      titulo: [chamado.titulo],
      status: [chamado.status],
      prioridade: [chamado.prioridade],
      observacoes: [chamado.observacoes],
      tecnico: [chamado.tecnico],
      cliente: [chamado.cliente],
    });
  }

  update(): void {
    this.chamadoService.update(Number(this.chamadoId), this.chamadoForm.value).subscribe(response => {
      this.toast.success('Chamado atualizado com sucesso', 'Success');
      this.router.navigate(['/chamados']);
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

  validarCampos() {
    return this.chamadoForm.valid;
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
