"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morcego = void 0;
const Animal_1 = require("./Animal");
class Morcego extends Animal_1.Animal {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    comer() {
        const alimento = 'Frutas';
        console.log(`O ${this.nome} come ${alimento}`);
    }
}
exports.Morcego = Morcego;
