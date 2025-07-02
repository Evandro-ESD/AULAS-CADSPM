"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Baleia_1 = require("./Baleia");
const Morcego_1 = require("./Morcego");
const baleia1 = new Baleia_1.Baleia("Baleia", "", "azul");
const morcego = new Morcego_1.Morcego("Morcego", "sul", "branco");
const animais = [baleia1, morcego];
// morcego.comer()
// baleia1.comer()
for (const animal of animais) {
    animal.comer(animal.nome);
}
