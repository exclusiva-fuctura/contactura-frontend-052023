import { Component } from '@angular/core';
import { Receita } from 'src/app/shared/models/receita';
import { ReceitasService } from 'src/app/shared/services/receitas.service';

@Component({
  selector: 'app-relatorios-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

  public dataSource: Receita[] = [];
  public displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(private receitasService: ReceitasService) {
    this.dataSource = this.receitasService.getReceitas();
  }

  get valorTotal(): number {
    let total = 0;
    for (let item of this.dataSource) {
      total = total + item.valor;
    }
    return total;
  }
}
