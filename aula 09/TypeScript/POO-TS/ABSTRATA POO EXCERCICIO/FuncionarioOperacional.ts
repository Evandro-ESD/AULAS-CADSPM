// Tem um atributo adicional: horasExtras
// O salário final é salarioBase + (horasExtras * 20)

import { Funcionario } from "./Funcionario";

export class FuncionarioOperacional extends Funcionario {
    constructor(nome:string, salarioBase:number, public horasExtras:number){
        super(nome, salarioBase)
    }

    calcularSalario(): number{
        return this.salarioBase + this.horasExtras * 45
    }

    exbirDados(): void {
        console.log(`Nome: ${this.nome}\nSalário: ${this.salarioBase.toFixed(2)}`)
    }

}
