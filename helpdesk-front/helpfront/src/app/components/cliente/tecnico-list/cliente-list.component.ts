import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ClienteModel } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes: ClienteModel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<ClienteModel>(this.clientes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
      this.dataSource = new MatTableDataSource<ClienteModel>(this.clientes);
      this.dataSource.paginator = this.paginator;
    });
  }

  buscarPorFiltro($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('this.datasource', this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
