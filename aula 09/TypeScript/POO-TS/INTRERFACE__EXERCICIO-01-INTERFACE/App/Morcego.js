"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morcego = void 0;
const Animal_1 = require("./Animal");
class Morcego extends Animal_1.Animal {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    comer(nome) {
        const alimento = 'Frutas';
        console.log(`O ${nome} come ${alimento}`);
    }
}
exports.Morcego = Morcego;
