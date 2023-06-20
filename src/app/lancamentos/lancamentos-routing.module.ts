import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { AutenticadorGuard } from '../shared/security/autenticador.guard';

const routes: Routes = [
  {
    path: 'receitas',
    component: ReceitasComponent,
    canActivate: [AutenticadorGuard]
  },
  {
    path: 'despesas',
    component: DespesasComponent,
    canActivate: [AutenticadorGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
