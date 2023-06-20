import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';

import { DespesasComponent } from './pages/despesas/despesas.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';

@NgModule({
  declarations: [
    DespesasComponent,
    ReceitasComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
