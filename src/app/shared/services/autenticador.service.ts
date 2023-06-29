import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenState } from '../security/token.state';

export interface Login {username: string, password: string}

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {


  constructor(private router: Router, private tokenState: TokenState) {}

  public login({ username, password }: Login): void {
    // request.backend(username, password);
    const response = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gQ29udGFjdHVyYSBkYSBGdWN0dXJhIiwic3ViIjoiZTdjNTU1YmUtMDQ3Mi00Yjg2LTg1MDctY2QzMGY2NDhiNTY3IiwiaWF0IjoxNjg3OTEyMDkwLCJleHAiOjE2ODc5OTg0OTB9.ACbEh_e-odf_zTPI6zlTm_5h1Mv29zFtsllSypTCp8Q";

    console.log(username, password)

    if (!response) {
      console.warn('Não foi possível se autenticar')
      return
    }

    this.tokenState.setToken(response);
    this.router.navigate(['dashboard']);
  }
}
