"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    Livro.prototype.getLivro = function () {
        return this.titulo;
    };
    Livro.prototype.setLivro = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getExibirInformacoes = function () {
        return "Titulo: ".concat(this.titulo, "\n\tAutor: ").concat(this.autor.getNomeCompleto());
    };
    return Livro;
}());
exports.Livro = Livro;
