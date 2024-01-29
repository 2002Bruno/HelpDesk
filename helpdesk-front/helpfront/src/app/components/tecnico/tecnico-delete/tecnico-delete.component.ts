import { Component, OnInit } from '@angular/core';
import { TecnicoModel } from "../../../models/tecnico";
import { ActivatedRoute, Router } from "@angular/router";
import { TecnicoService } from "../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.scss']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: TecnicoModel = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
  }

  constructor(
    private router: Router,
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');

    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(response => {
      response.perfis = [];
      this.tecnico = response;
    });
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnico.id).subscribe(response => {
      this.toast.success('Técnico deletado com sucesso', 'Exclusão');
      this.router.navigate(['/tecnicos']);
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
    this.router.navigate(['/tecnicos']);
  }
}
