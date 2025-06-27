"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    getLivro() {
        return this.titulo;
    }
    setLivro(titulo) {
        this.titulo = titulo;
    }
    getExibirInformacoes() {
        return `Titulo: ${this.titulo}\n\tAutor: ${this.autor.getNomeCompleto()}`;
    }
}
exports.Livro = Livro;
