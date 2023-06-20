import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AutenticadorGuard } from './guards/autenticador.guard';

const routes: Routes = [

  // Rotas públicas
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },

  // Rotas protegidas
  { path: 'dashboard', component: DashboardComponent, canActivate: [AutenticadorGuard] },
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamentos/lancamentos.module')
      .then(m => m.LancamentosModule),
    canActivate: [AutenticadorGuard]
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module')
      .then(m => m.RelatoriosModule),
    canActivate: [AutenticadorGuard]
  },

  // Rotas não existentes
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
