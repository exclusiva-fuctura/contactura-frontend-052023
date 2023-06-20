import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { DespesasComponent } from './components/despesas/despesas.component';
import { AutenticadorGuard } from '../guards/autenticador.guard';

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
