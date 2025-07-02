"use strict";
// Tem um atributo adicional: bonusMensal
// O salário final é salarioBase + bonusMensal
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioAdm = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioAdm extends Funcionario_1.Funcionario {
    constructor(nome, salarioBase, bonusMensal) {
        super(nome, salarioBase);
        this.bonusMensal = bonusMensal;
    }
    calcularSalario() {
        return this.salarioBase + this.bonusMensal;
    }
    exbirDados() {
        console.log(`Nome: ${this.nome}\nSalário: ${this.salarioBase.toFixed(2)}`);
    }
}
exports.FuncionarioAdm = FuncionarioAdm;
