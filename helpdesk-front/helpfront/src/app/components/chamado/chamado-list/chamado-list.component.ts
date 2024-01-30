import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ChamadoModel } from "../../../models/chamado";
import { ChamadoService } from "../../../services/chamado.service";
import { StatusChamadoEnum } from "../../../enums/status-chamado.enum";
import { PrioridadeEnum } from "../../../enums/prioridade.enum";

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.scss']
})
export class ChamadoListComponent implements OnInit {

  chamados: ChamadoModel[] = [];
  chamadoFiltered: ChamadoModel[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<ChamadoModel>(this.chamados);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private chamadoService: ChamadoService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.chamadoService.findAll().subscribe(response => {
      this.chamados = response;
      this.dataSource = new MatTableDataSource<ChamadoModel>(this.chamados);
      this.dataSource.paginator = this.paginator;
    });
  }

  buscarPorFiltro($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('this.datasource', this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ordenarPorStatus(status: any): void {

    this.chamados.forEach(element => {
      if (element.status != status) {
       this.chamadoFiltered = this.chamados.filter(chamado => chamado.status === status);;
      }
      this.dataSource = new MatTableDataSource<ChamadoModel>(this.chamadoFiltered);
      this.dataSource.paginator = this.paginator;
    });
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
