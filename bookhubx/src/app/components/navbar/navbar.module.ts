// navbar.module.ts

import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [AutoCompleteModule /* other modules */],
  exports: [NavbarComponent],
})
export class NavbarModule {}
