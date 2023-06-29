import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticadorService, Login } from 'src/app/shared/services/autenticador.service';
import { passwordValidators, usernameValidators } from './login.validators';

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
      username: ['', usernameValidators],
      password: ['', passwordValidators]
    });
  }

  public onSubmit(): void {
    const autenticadores: Login = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }

    console.log(autenticadores);

    this.autenticadorService.login(autenticadores)
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
    if (usernameField && usernameField.hasError('minlength')) {
      this.usernameErrorMessage = "Minha mensagem personalizada de min length"
      return true
    }

    return false
  }
}
