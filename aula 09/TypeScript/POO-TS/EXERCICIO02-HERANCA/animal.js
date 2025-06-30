"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Animal.prototype.getIdade = function () {
        return this.idade;
    };
    Animal.prototype.setIdade = function (idade) {
        this.nome = idade;
    };
    Animal.prototype.getRaca = function () {
        return this.raca;
    };
    Animal.prototype.setRaca = function (raca) {
        this.raca = raca;
    };
    /*------------------- outros métodos -------------------------*/
    // métodos comum atodas as classes
    Animal.prototype.comer = function () {
        console.log("".concat(this.getNome(), " est\u00E1 comendo."));
    };
    // métodos poliformicos: será sobrescrito nas classes filhas
    Animal.prototype.fazerSom = function () {
        console.log("".concat(this.getNome(), " est\u00E1 fazendo um som."));
    };
    return Animal;
}());
exports.Animal = Animal;
