import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LivroServiceService {
  constructor() {}

  carregarGeneros(): string[] {
    return ['Ciências Exatas', 'Tecnologia', 'Português'];
  }
}
