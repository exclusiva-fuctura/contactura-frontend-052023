import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';

import { ReceitasComponent } from './pages/receitas/receitas.component';
import { DespesasComponent } from './pages/despesas/despesas.component';

@NgModule({
  declarations: [
    ReceitasComponent,
    DespesasComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
