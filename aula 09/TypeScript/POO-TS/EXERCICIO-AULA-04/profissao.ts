export class Profissao {
    matricula: number
    nomeProfissao: string
    setor: string

    constructor(matricula: number, nomeProfissao: string, setor: string) {

        this.matricula = matricula
        this.nomeProfissao = nomeProfissao
        this.setor = setor

    }

    getExibirInfosProfissao(): string {
        return `
            Nome: ${this.matricula}\n
            Idade: ${this.nomeProfissao}\n
            RG: ${this.setor}
            `
    }
}