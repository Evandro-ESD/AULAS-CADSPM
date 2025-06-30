"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    constructor(nome, idade, raca, corPelo) {
        super(nome, idade, raca);
        this.corPelo = corPelo;
    }
    //métodos
    getCorPelo() {
        return this.corPelo;
    }
    setCorPelo(corPelo) {
        this.corPelo = corPelo;
    }
    fazerSom() {
        console.log(`${this.getNome()} faz o som: Au! Au!`);
    }
}
exports.Cachorro = Cachorro;
