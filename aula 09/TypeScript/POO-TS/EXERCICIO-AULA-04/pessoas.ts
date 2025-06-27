export class Pessoas {
    nome: string
    idade: number
    rg: number

    constructor(nome: string, idade: number, rg: number) {
        this.nome = nome
        this.idade = idade
        this.rg = rg
     }

        getExibirInfos():string{
            return `
                Nome: ${this.nome}\n
                Idade: ${this.idade}\n
                RG: ${this.rg}
            `
        }
}