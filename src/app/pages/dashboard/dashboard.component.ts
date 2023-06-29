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

  public listaDeReceitas: Receita[] = [];

  constructor(
    private receitasService: ReceitasService,
    private lancamentosService: LancamentosService
  ) {
    this.listaDeReceitas = receitasService.getReceitas();

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

}
