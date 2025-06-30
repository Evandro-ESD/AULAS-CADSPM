import { Pessoas } from "./Pessoas"

export class Funcionario extends Pessoas{
    private matricula:number

    constructor(codigo:number, nome:string, rg:number, matricula:number){
        super(codigo, nome, rg)
        this.matricula = matricula
    }

    public override mostrarString(): void {
        console.log(`O nome do funcionário é: ${this.getNome()}`)
    }
}