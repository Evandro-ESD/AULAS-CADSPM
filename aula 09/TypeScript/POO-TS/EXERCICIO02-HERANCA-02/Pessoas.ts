export class Pessoas {
    private codigo: number
    private nome: string
    private rg: number

    constructor(codigo: number, nome: string, rg: number) {
        this.codigo = codigo
        this.nome = nome
        this.rg = rg
    }

    public getNome() {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }

    public mostrarString(){
        console.log(`O nome é: ${this.nome}\nE o seu RG é: ${this.nome}`)
    }

}