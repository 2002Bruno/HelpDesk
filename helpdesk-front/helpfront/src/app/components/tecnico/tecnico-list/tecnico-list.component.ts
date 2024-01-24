import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { TecnicoModel } from "../../../models/Tecnico";

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.scss']
})
export class TecnicoListComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: TecnicoModel[] = [
    {
      id: 1,
      nome: 'MaguiLovin',
      cpf: '083.097.171-80',
      email: 'brunomaguila24@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: new Date()
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<TecnicoModel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
