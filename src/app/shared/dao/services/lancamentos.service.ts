import { Injectable } from '@angular/core';
import { DaoService } from '../dao.service';
import { Lancamento } from '../../models/lancamento';
import Swal from 'sweetalert2';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(private daoService: DaoService) { }

  public getLancamentos(): void {
    this.daoService.get<Array<Lancamento>>(
      "/api/lancamento",
      DaoService.MEDIA_TYPE_APP_JSON
    ).subscribe({
      next: (response) => {
        if (response.status === HttpStatusCode.Ok) {
          console.log(response.body)
        }
      },
      error: (err) => {
        Swal.fire('ALERTA!', 'Ocorreu um erro ao buscar os dados de lançamentos', 'warning');
      }
    });
  }
}
