import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { TecnicoModel } from "../../../models/tecnico";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.scss']
})
export class TecnicoCreateComponent implements OnInit {

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
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.tecnicoService.create(this.tecnico).subscribe(response => {
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
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
