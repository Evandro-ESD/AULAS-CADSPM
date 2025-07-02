export abstract class Funcionario {
    constructor(public nome: string, public salarioBase: number) { }
    exbirDados() { `Nome: ${this.nome}\nR$: ${this.salarioBase.toFixed(2)}` }
    abstract calcularSalario(): number
}
