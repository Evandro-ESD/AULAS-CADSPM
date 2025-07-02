"use strict";
// Tem um atributo adicional: horasExtras
// O salário final é salarioBase + (horasExtras * 20)
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioOperacional = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioOperacional extends Funcionario_1.Funcionario {
    constructor(nome, salarioBase, horasExtras) {
        super(nome, salarioBase);
        this.horasExtras = horasExtras;
    }
    calcularSalario() {
        return this.salarioBase + this.horasExtras * 45;
    }
    exbirDados() {
        console.log(`Nome: ${this.nome}\nSalário: ${this.salarioBase.toFixed(2)}`);
    }
}
exports.FuncionarioOperacional = FuncionarioOperacional;
