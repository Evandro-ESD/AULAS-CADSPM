import { Autor } from "./autor";

export class Livro {
  private titulo: string;
  private autor: Autor;

  constructor(titulo: string, autor: Autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  public getLivro(): string {
    return this.titulo;
  }
  public setLivro(titulo: string): void {
    this.titulo = titulo;
  }

  public getExibirInformacoes(): string {
    return `Titulo: ${this.titulo}\n\tAutor: ${this.autor.getNomeCompleto()}`;
  }
}
