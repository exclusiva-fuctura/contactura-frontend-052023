import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorios-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent {

  public dataSource: any[] = [];
  public displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  get valorTotal(): number {
    let total = 0;
    for (let item of this.dataSource) {
      total = total + item.valor;
    }
    return total;
  }
}
