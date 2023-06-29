import { Component } from '@angular/core';
import { LancamentosService } from 'src/app/shared/dao/services/lancamentos.service';
import { Receita } from 'src/app/shared/models/receita';
import { ReceitasService } from 'src/app/shared/services/receitas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public dataSourceDespesas: any[] = [];
  public dataSourceReceitas: Receita[] = [];
  public displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private receitasService: ReceitasService,
    private lancamentosService: LancamentosService
  ) {
    this.dataSourceReceitas = receitasService.getReceitas();

    this.lancamentosService.getLancamentos();
  }

  public adicionarReceita(): void {
    this.receitasService.setReceita({
      id: 3,
      tipo: "salario",
      descricao: "auxilio computador",
      mensagem: "mais um aditivo",
      data: new Date(),
      valor: 250
    })
  }

  public onDeleteReceita(item: unknown): void {
    //
  }

  public onEditReceita(item: unknown): void {
    //
  }

  public onDeleteDespesa(item: unknown): void {
    //
  }

  public onEditDespesa(item: unknown): void {
    //
  }

}
