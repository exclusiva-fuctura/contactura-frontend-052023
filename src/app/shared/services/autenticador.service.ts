import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Login {username: string, password: string}

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  private token: string | null;

  constructor(private router: Router) {
    this.token = '';
  }

  public login({ username, password }: Login): void {
    // request.backend(username, password);
    const response = "123456";

    console.log(username, password)

    if (!response) {
      console.warn('Não foi possível se autenticar')
      return
    }

    this.token = response;
    this.router.navigate(['dashboard']);
  }

  public getToken(): string | null {
    return this.token;
  }
}
