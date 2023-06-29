import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenState } from '../security/token.state';
import { DaoService } from '../dao/dao.service';
import { HttpStatusCode } from '@angular/common/http';
import Swal from 'sweetalert2';

export interface Login {email: string, senha: string}

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  constructor(
    private router: Router,
    private tokenState: TokenState,
    private daoService: DaoService,
  ) {}

  public login({ email, senha }: Login): void {
    const payload: Login = {
      email,
      senha
    }

    this.daoService.post<Login>(
      "/api/autenticador",
      payload,
      DaoService.MEDIA_TYPE_APP_JSON
    ).subscribe({
      next: (response) => {
        if (response.status === HttpStatusCode.Created) {
          this.tokenState.setToken(response.headers.get('authorization'));
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        Swal.fire('ALERTA!', err.error.mensagem, 'warning');
      }
    });
  }
}
