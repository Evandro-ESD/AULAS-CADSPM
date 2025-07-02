"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Baleia = void 0;
const Animal_1 = require("./Animal");
class Baleia extends Animal_1.Animal {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    comer() {
        console.log(`A ${this.nome} está comendo peixes`);
    }
}
exports.Baleia = Baleia;
