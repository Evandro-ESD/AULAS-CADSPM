"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.nome = idade;
    }
    getRaca() {
        return this.raca;
    }
    setRaca(raca) {
        this.raca = raca;
    }
    /*------------------- outros métodos -------------------------*/
    // métodos comum atodas as classes
    comer() {
        console.log(`${this.getNome()} está comendo.`);
    }
    // métodos poliformicos: será sobrescrito nas classes filhas
    fazerSom() {
        console.log(`${this.getNome()} está fazendo um som.`);
    }
}
exports.Animal = Animal;
