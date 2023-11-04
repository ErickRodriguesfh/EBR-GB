import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LivroComponent } from './components/livro/livro.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    LivroComponent,
    DialogComponent
  ],
  imports: [CommonModule, LivrosRoutingModule, SharedModule],
})
export class LivrosModule {}
