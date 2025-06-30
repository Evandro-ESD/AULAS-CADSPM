import { Animal } from "./animal"

export class Cachorro extends Animal {

    private corPelo: string

    constructor(nome: string, idade: number, raca: string, corPelo: string) {
        super(nome, idade, raca)
        this.corPelo = corPelo

    }
    //métodos
    public getCorPelo(): string {
        return this.corPelo
    }
    public setCorPelo(corPelo: string): void {
        this.corPelo = corPelo
    }

    public override fazerSom(): void {
        console.log(`${this.getNome()} faz o som: Au! Au!`)       
    }


}
