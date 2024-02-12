import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TecnicoService } from "../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.scss']
})
export class TecnicoDeleteComponent implements OnInit {

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

    this.tecnicoForm.controls['nome'].disable();
    this.tecnicoForm.controls['cpf'].disable();
    this.tecnicoForm.controls['email'].disable();
    this.tecnicoForm.controls['senha'].disable();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnicoId).subscribe(response => {

      this.preencherForm(response);
    });
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnicoForm.value.id).subscribe(response => {
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
