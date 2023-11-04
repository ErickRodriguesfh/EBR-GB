import { Component } from '@angular/core';
import { Livro } from '../../model/livro';

const livros: Livro[] = [
  {
    codigo: 12,
    titulo: 'Matemática Avançada',
    qtdDePaginas: 345,
    autor: 'Mateus Nogueira',
    genero: 'Ciências Exatas',
    dataPublicacao: new Date(),
  },
  {
    codigo: 13,
    titulo: 'Java Básico',
    qtdDePaginas: 500,
    autor: 'Matthew Keller',
    genero: 'Tecnologia',
    dataPublicacao: new Date(),
  },
  {
    codigo: 14,
    titulo: 'SQL Para iniciantes',
    qtdDePaginas: 485,
    autor: 'John Lucas',
    genero: 'Tecnologia',
    dataPublicacao: new Date(),
  },
  {
    codigo: 15,
    titulo: 'Português Avançado',
    qtdDePaginas: 550,
    autor: 'Julian Alvares',
    genero: 'Português',
    dataPublicacao: new Date(),
  },
];

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
})
export class LivroComponent {
  displayedColumns: string[] = [
    'codigo',
    'titulo',
    'qtdPaginas',
    'autor',
    'genero',
    'dataPublicacao',
  ];

  dataSource = livros;
}
