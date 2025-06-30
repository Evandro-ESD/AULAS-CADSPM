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
            Matricula: ${this.matricula}\n
            Profissão: ${this.nomeProfissao}\n
            Setor: ${this.setor}
            `
    }
}