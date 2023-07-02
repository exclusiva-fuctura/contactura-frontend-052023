import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receita } from 'src/app/shared/models/receita';
import { ReceitasService } from 'src/app/shared/services/receitas.service';

import * as moment from 'moment';

@Component({
  selector: 'app-relatorios-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

  public pesquisarReceitasForm: FormGroup;

  public dataSource: Receita[] = [];
  public displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private receitasService: ReceitasService,
    private formBuilder: FormBuilder
  ) {
    this.dataSource = this.receitasService.getReceitas();

    this.pesquisarReceitasForm = this.formBuilder.group({
      dataPesquisa: ['', Validators.required]
    });
  }

  get dataPesquisa(): string | undefined {
    return this.pesquisarReceitasForm.get('dataPesquisa')?.value;
  }

  get valorTotal(): number {
    let total = 0;
    for (let item of this.dataSource) {
      total = total + item.valor;
    }
    return total;
  }

  public onSubmit(): void {
    if (this.dataPesquisa) {
      const receitasFitlradas = this.receitasService
      .getReceitas()
      .filter((receita) => moment(this.dataPesquisa).isSame(receita.data))

      this.dataSource = receitasFitlradas;
    }
  }

  public isInvalidoForm(): boolean {
    return this.pesquisarReceitasForm.invalid;
  }
}
