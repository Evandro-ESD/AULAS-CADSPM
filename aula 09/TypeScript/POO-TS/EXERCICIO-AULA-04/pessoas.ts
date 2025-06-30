import { Profissao } from "./profissao"

export class Pessoas {
    nome: string
    idade: number
    rg: number

    constructor(nome: string, idade: number, rg: number) {
        this.nome = nome
        this.idade = idade
        this.rg = rg

    }

    getExibirInfos(): void {
        console.log(`Nome: ${this.nome}\n
                Idade: ${this.idade}\n
                RG: ${this.rg}\n
            `)
    }


}