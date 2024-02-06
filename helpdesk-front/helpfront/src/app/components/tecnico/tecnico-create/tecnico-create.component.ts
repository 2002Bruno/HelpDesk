import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TecnicoService } from "../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.scss']
})
export class TecnicoCreateComponent implements OnInit {

  tecnicoForm: FormGroup;

  constructor(
    private router: Router,
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.inicializaForm();
  }

  inicializaForm() {
    this.tecnicoForm = new FormGroup({
      nome: new FormControl(null, [Validators.minLength(3), Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      senha: new FormControl(null, [Validators.minLength(3), Validators.required]),
      perfis: new FormControl(null, [Validators.minLength(3), Validators.required]),
    });
  }

  onSubmit(): void {
    this.tecnicoService.create(this.tecnicoForm.value).subscribe(response => {
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

  // addPerfil(perfil: any): void {
  //   this.tecnico.perfis.push(perfil);
  //
  //   if (this.tecnico.perfis.includes(perfil)) {
  //     this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
  //   } else {
  //     this.tecnico.perfis.push(perfil);
  //   }
  // }

  validarCampos() {
    return this.tecnicoForm.valid;
  }

  voltar() {
    this.router.navigate(['/tecnicos']);
  }
}
