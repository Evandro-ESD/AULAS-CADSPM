"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
var Pessoas = /** @class */ (function () {
    function Pessoas(codigo, nome, rg) {
        this.codigo = codigo;
        this.nome = nome;
        this.rg = rg;
    }
    Pessoas.prototype.getNome = function () {
        return this.nome;
    };
    Pessoas.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoas.prototype.mostrarString = function () {
        console.log("O nome \u00E9: ".concat(this.nome, "\nE o seu RG \u00E9: ").concat(this.nome));
    };
    return Pessoas;
}());
exports.Pessoas = Pessoas;
