import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-lancamentos-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

  public lancamentoReceitaForm: FormGroup;
  public buttonLabel: string = "Salvar";

  constructor(private formBuilder: FormBuilder) {
    this.lancamentoReceitaForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      ehFixo: false,
      data: moment().format(),
      descricao: ['', Validators.required],
      valor: ['', Validators.required]

    });
  }

  public get tipos(): string[] {
    return ['Salario','Extra','Doação','Emprestimo','Investimento'];
  }

  public onSubmit(): void {
    //
  }

  public onReset(): void {
    this.lancamentoReceitaForm.reset();
    this.lancamentoReceitaForm.patchValue({
      data: moment().format(),
      ehFixo: false
    });
  }

  public isFormularioInvalido(): boolean {
    return this.lancamentoReceitaForm.invalid;
  }
}
