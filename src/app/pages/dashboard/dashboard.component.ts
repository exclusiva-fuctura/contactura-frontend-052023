import { Component } from '@angular/core';
import { LancamentosService } from 'src/app/shared/dao/services/lancamentos.service';
import { Receita } from 'src/app/shared/models/receita';
import { ReceitasService } from 'src/app/shared/services/receitas.service';
import Swal from 'sweetalert2';

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

    this.lancamentosService.getLancamentos().subscribe({
      next: () => {
        this.dataSourceReceitas = this.receitasService.getReceitas();
      },
      error: () => {
        Swal.fire('ALERTA!', 'Ocorreu um erro ao buscar os dados de lançamentos', 'warning');
      }
    });
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
