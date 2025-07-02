"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Baleia_1 = require("./Baleia");
const Morcego_1 = require("./Morcego");
const baleia1 = new Baleia_1.Baleia("Baleia", "", "azul");
const morcego = new Morcego_1.Morcego("Morcego", "sul", "branco");
const animal = [];
animal.forEach(animal => {
    animal.comer(animal.nome);
});
