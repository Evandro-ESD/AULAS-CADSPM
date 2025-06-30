"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoas_1 = require("./Pessoas");
class Funcionario extends Pessoas_1.Pessoas {
    constructor(codigo, nome, rg, matricula) {
        super(codigo, nome, rg);
        this.matricula = matricula;
    }
    mostrarString() {
        console.log(`O nome do funcionário é: ${this.getNome()}`);
    }
}
exports.Funcionario = Funcionario;
