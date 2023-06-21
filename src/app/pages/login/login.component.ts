import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticadorService, Login } from 'src/app/shared/services/autenticador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usernameErrorMessage: string = '';
  public mostrarLoading: boolean = false;

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private autenticadorService: AutenticadorService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      password: ['', [Validators.required]]
    });
  }

  public validarForm(): void {
    console.log(JSON.stringify(
      this.loginForm.value
    ))
  }

  public navegarParaRota(rota: string): void {
    this.router.navigate([rota]);
  }

  public isFormularioValido(): boolean {
    return !this.loginForm.valid;
  }

  public hasErrorInUsername(): boolean {
    const usernameField = this.loginForm.get('username');

    if (usernameField && usernameField.hasError('required')) {
      this.usernameErrorMessage = "Minha mensagem personalizada de required"
      return true
    }
    if (usernameField && usernameField.hasError('email')) {
      this.usernameErrorMessage = "Minha mensagem personalizada de email"
      return true
    }

    return false
  }

  public executarLogin(): void {
    const autenticadores: Login = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }

    this.autenticadorService.login(autenticadores)
  }
}
