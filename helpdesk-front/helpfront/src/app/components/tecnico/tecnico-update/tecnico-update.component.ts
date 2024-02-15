import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TecnicoService } from "../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.scss']
})
export class TecnicoUpdateComponent implements OnInit {

  tecnicoForm: FormGroup;
  tecnicoId: any;

  constructor(
    private router: Router,
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.tecnicoId = this.route.snapshot.paramMap.get('id');
    this.inicializarForm();

    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnicoId).subscribe(response => {

      this.preencherForm(response);
    });
  }

  inicializarForm() {
    this.tecnicoForm = new FormGroup({

      id: new FormControl(this.tecnicoId, Validators.required),
      nome: new FormControl(null, [Validators.minLength(3), Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      email: new FormControl(null),
      senha: new FormControl(null, [Validators.minLength(3), Validators.required]),
    });
  }

  preencherForm(tecnico) {
    this.tecnicoForm = this.formBuilder.group({
      id: [tecnico.id],
      nome: [tecnico.nome],
      cpf: [tecnico.cpf],
      email: [tecnico.email],
      senha: [tecnico.senha],
    });

    this.tecnicoForm.controls['email'].disable();
  }

  onSubmit(): void {
    this.tecnicoForm.value.email = this.tecnicoForm['controls']['email'].value;

    this.tecnicoService.update(this.tecnicoForm.value).subscribe(response => {
      this.toast.success('Técnico atualizado com sucesso', 'Edição');
      this.router.navigate(['/tecnicos']);
    }, error => {
      this.toast.error('Ocorreu um erro ao tentar fazer a atualização dos dados do técnico, verifique os capos e veja se o cpf é válido!', 'Erro');
    });
  }

  validarCampos() {
    return this.tecnicoForm.valid;
  }

  voltar() {
    this.router.navigate(['/tecnicos']);
  }
}
