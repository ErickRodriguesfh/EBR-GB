import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LivroServiceService } from '../../services/livro-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  generos: string[];

  constructor(private livroService: LivroServiceService) {
    this.generos = livroService.carregarGeneros();
  }
}
