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

const components = [
  MenuComponent,
  LogoutComponent,
  LoadingComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  exports: [
    components,
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
