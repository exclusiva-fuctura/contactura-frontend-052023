import { Injectable } from '@angular/core';
import { DaoService } from '../dao.service';
import { Lancamento } from '../../models/lancamento';
import { HttpStatusCode } from '@angular/common/http';
import { ReceitasService } from '../../services/receitas.service';
import { Observable, map } from 'rxjs';

import * as moment from 'moment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(private daoService: DaoService, private receitasService: ReceitasService) { }

  public getLancamentos(): Observable<void> {
    return this.daoService.get<Array<Lancamento>>(
      "/api/lancamento",
      DaoService.MEDIA_TYPE_APP_JSON
    ).pipe(
      map((lancamentosResponse) => {
      if (lancamentosResponse.status === HttpStatusCode.Ok) {
        console.log(lancamentosResponse.body)

        const receitas = lancamentosResponse.body
          ?.filter((lancamento: Lancamento) => lancamento.ehReceita)
          .map((receita: Lancamento) => {
            receita.data = moment(receita.data).toDate()

            return receita
          })
          .map((receita: Lancamento) => {
            return {
              ...receita,
              data: moment(receita.data).toDate()
            }
          })
          .map((receita: Lancamento) => ({
            ...receita,
            data: moment(receita.data).toDate()
          }))
        const despesas = lancamentosResponse.body?.filter((lancamento) => !lancamento.ehReceita)

        this.receitasService.setReceitas(receitas ? receitas : []);
      }
    }));
  }

  public save(lancamento: Lancamento): void {
    this.daoService.post<any>(
      "/api/lancamento",
      lancamento,
      DaoService.MEDIA_TYPE_APP_JSON
    ).subscribe({
      next: (response) => {
        if (response.status === HttpStatusCode.Created && response.body) {
          if (lancamento.ehReceita) {
            this.receitasService.setReceita({
              ...lancamento,
              data: moment(lancamento.data).toDate()
            })

            // possibilidade de redirecionar para relatorios de receitas
          } else {
            // despesa
          }
        }
      },
      error: (err) => {
        Swal.fire('ALERTA!', 'Não foi possível adicionar este lançamento', 'warning');
      }
    })
  }
}
