import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';

import { ReceitasComponent } from './components/receitas/receitas.component';
import { DespesasComponent } from './components/despesas/despesas.component';

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
