"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
var Pessoas = /** @class */ (function () {
    function Pessoas() {
        this.id = 0;
        this.nome = '';
        this.idade = 0;
    }
    // metodos get
    Pessoas.prototype.getId = function () {
        return this.id;
    };
    Pessoas.prototype.getNome = function () {
        return this.nome;
    };
    Pessoas.prototype.getIdade = function () {
        return this.idade;
    };
    // metodos set
    Pessoas.prototype.setId = function (id) {
        this.id = id;
    };
    Pessoas.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    // permitir inserir caso a idade seja maior que 18
    Pessoas.prototype.setIdade = function (idade) {
        if (idade <= 18) {
            return false;
        }
        else {
            this.idade = idade;
            return true;
        }
    };
    return Pessoas;
}());
exports.Pessoas = Pessoas;
