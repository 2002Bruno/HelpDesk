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
    });
  }

  onSubmit(): void {
    this.tecnicoService.create(this.tecnicoForm.value).subscribe(response => {
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['/tecnicos']);
    }, error => {
      this.toast.error('Ocorreu um erro ao tentar fazer o cadastro do técnico, verifique os capos e veja se o cpf é válido!', 'Erro');
    });
  }

  validarCampos() {
    return this.tecnicoForm.valid;
  }

  voltar() {
    this.router.navigate(['/tecnicos']);
  }
}
