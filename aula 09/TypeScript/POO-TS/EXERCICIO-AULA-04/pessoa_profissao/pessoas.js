"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    getExibirInfos() {
        console.log(`Nome: ${this.nome}\n
                Idade: ${this.idade}\n
                RG: ${this.rg}\n
            `);
    }
}
exports.Pessoas = Pessoas;
