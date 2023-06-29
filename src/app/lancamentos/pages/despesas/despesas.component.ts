import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-lancamentos-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent {

  public lancamentoDespesaForm: FormGroup;
  public buttonLabel: string = "Salvar";

  constructor(private formBuilder: FormBuilder) {
    this.lancamentoDespesaForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      ehFixo: false,
      data: moment().format(),
      descricao: ['', Validators.required],
      valor: ['', Validators.required]

    });
  }

  public get tipos(): string[] {
    return ['Alimentação','Habitação','Transporte','Educação','Lazer','Viagem'];
  }

  public onSubmit(): void {
    //
  }

  public onReset(): void {
    this.lancamentoDespesaForm.reset();
    this.lancamentoDespesaForm.patchValue({
      data: moment().format(),
      ehFixo: false
    });
  }

  public isFormularioInvalido(): boolean {
    return this.lancamentoDespesaForm.invalid;
  }
}
