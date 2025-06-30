export class Animal {
    private nome: string
    private idade: number
    private raca: string


    constructor(nome: string, idade: number, raca: string ) {
        this.nome = nome
        this.idade = idade
        this.raca = raca
    }

    public getNome(): string {
        return this.nome
    }
    public setNome(nome: string): void {
        this.nome = nome
    }

    public getIdade() {
        return this.idade
    }
    public setIdade(idade: string): void {
        this.nome = idade
    }

    public getRaca() {
        return this.raca
    }
    public setRaca(raca: string): void {
        this.raca = raca
    }
/*------------------- outros métodos -------------------------*/
    // métodos comum atodas as classes
    public comer(): void {
        console.log(`${this.getNome()} está comendo.`)
    }
    // métodos poliformicos: será sobrescrito nas classes filhas
    public fazerSom(): void {
        console.log(`${this.getNome()} está fazendo um som.`)
    }

}