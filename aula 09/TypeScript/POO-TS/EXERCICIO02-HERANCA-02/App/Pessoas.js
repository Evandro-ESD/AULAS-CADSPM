"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    constructor(codigo, nome, rg) {
        this.codigo = codigo;
        this.nome = nome;
        this.rg = rg;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    mostrarString() {
        console.log(`O nome é: ${this.nome}\nE o seu RG é: ${this.nome}`);
    }
}
exports.Pessoas = Pessoas;
