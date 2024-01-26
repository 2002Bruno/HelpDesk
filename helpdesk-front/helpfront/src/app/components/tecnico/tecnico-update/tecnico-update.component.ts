import { Component, OnInit } from '@angular/core';
import { TecnicoModel } from "../../../models/tecnico";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TecnicoService } from "../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.scss']
})
export class TecnicoUpdateComponent implements OnInit {

  tecnico: TecnicoModel = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(11)]);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

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

  onSubmit(): void {
    this.tecnicoService.update(this.tecnico).subscribe(response => {
      this.toast.success('Técnico atualizado com sucesso', 'Edição');
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

  addPerfil(perfil: any): void {
    this.tecnico.perfis.push(perfil);

    if (this.tecnico.perfis.includes(perfil)) {
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      this.tecnico.perfis.push(perfil);
    }
  }

  validarCampos() {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

  voltar() {
    this.router.navigate(['/tecnicos']);
  }
}
