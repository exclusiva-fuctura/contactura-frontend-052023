import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';

import { DespesasComponent } from './pages/despesas/despesas.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DespesasComponent,
    ReceitasComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RelatoriosModule { }
