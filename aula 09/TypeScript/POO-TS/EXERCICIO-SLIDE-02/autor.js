"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
    Autor.prototype.getNome = function () {
        return this.nome;
    };
    Autor.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Autor.prototype.getSobreNome = function () {
        return this.sobreNome;
    };
    Autor.prototype.setSobreNome = function (sobreNome) {
        this.sobreNome = sobreNome;
    };
    Autor.prototype.getNomeCompleto = function () {
        return this.nome + this.sobreNome;
    };
    Autor.prototype.getMenssagem = function () {
        return "".concat(this.getNomeCompleto());
    };
    return Autor;
}());
exports.Autor = Autor;
