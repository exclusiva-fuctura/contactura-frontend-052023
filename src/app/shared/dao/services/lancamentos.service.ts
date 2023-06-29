import { Injectable } from '@angular/core';
import { DaoService } from '../dao.service';
import { Lancamento } from '../../models/lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(private daoService: DaoService) { }

  public getLancamentos(): void {
    this.daoService.get<Array<Lancamento>>(
      "/api/lancamento",
      DaoService.MEDIA_TYPE_APP_JSON
    ).subscribe((httpResponseLancamento) => {
      console.log(httpResponseLancamento)

      if (httpResponseLancamento.status === 200) {
        console.log(httpResponseLancamento.body?.filter)
      }
    });


  }
}
