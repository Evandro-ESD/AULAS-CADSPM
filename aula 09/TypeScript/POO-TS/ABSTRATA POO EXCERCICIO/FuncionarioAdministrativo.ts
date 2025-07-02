// Tem um atributo adicional: bonusMensal
// O salário final é salarioBase + bonusMensal

import { Funcionario } from "./Funcionario";

export class FuncionarioAdm extends Funcionario {

    constructor(nome: string, salarioBase: number, public bonusMensal: number) {
        super(nome, salarioBase)
    }

    calcularSalario(): number {
        return this.salarioBase + this.bonusMensal
    }

     exbirDados(): void {
        console.log(`Nome: ${this.nome}\nSalário: ${this.salarioBase.toFixed(2)}`)
    }
}