import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AutenticadorGuard } from './shared/security/autenticador.guard';

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
