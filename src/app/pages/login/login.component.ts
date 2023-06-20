import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public mostrarLoading: boolean = false;

  constructor(private router: Router) { }

  public navegarParaRota(rota: string): void {
    this.router.navigate([rota]);
  }
}
