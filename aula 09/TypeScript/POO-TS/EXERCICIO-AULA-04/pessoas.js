"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
var Pessoas = /** @class */ (function () {
    function Pessoas(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    Pessoas.prototype.getExibirInfos = function () {
        console.log("Nome: ".concat(this.nome, "\n\n                Idade: ").concat(this.idade, "\n\n                RG: ").concat(this.rg, "\n\n            "));
    };
    return Pessoas;
}());
exports.Pessoas = Pessoas;
