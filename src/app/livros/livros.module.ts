import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LivroComponent } from './components/livro/livro.component';

@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [CommonModule, LivrosRoutingModule, SharedModule],
})
export class LivrosModule {}
