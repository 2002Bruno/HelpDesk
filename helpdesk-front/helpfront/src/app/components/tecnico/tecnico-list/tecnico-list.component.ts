import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { TecnicoModel } from "../../../models/tecnico";
import { TecnicoService } from "../../../services/tecnico.service";

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.scss']
})
export class TecnicoListComponent implements OnInit {

  tecnicos: TecnicoModel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<TecnicoModel>(this.tecnicos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.tecnicoService.findAll().subscribe(response => {
      this.tecnicos = response;
      this.dataSource = new MatTableDataSource<TecnicoModel>(this.tecnicos);
      this.dataSource.paginator = this.paginator;
    });
  }

  buscarPorFiltro($event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('this.datasource', this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
