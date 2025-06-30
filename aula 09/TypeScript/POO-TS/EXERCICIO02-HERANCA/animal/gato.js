"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    constructor(nome, idade, raca, corPelo) {
        super(nome, idade, raca);
        this.corPelo = corPelo;
    }
    getCorPelo() {
        return this.corPelo;
    }
    setCorPelo(corPelo) {
        this.corPelo = corPelo;
    }
    /* Polimorfismo */
    fazerSom() {
        console.log(`${this.getNome()} faz o som: Miauuu`);
    }
}
exports.Gato = Gato;
