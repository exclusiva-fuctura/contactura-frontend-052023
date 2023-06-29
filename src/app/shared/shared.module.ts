import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

// guards
import { AutenticadorGuard } from './security/autenticador.guard';

// components
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DinheiroDirective } from './directives/dinheiro.directive';
import { MaiusculoDirective } from './directives/maiusculo.directive';

const components = [
  MenuComponent,
  LogoutComponent,
  LoadingComponent,
];

const directives = [
  DinheiroDirective,
  MaiusculoDirective
];

@NgModule({
  declarations: [
    components,
    directives
  ],
  exports: [
    components,
    directives
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    AutenticadorGuard,
  ]
})
export class SharedModule { }
