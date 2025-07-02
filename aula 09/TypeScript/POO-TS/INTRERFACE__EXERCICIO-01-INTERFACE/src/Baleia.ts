import { Animal } from "./Animal";

export class Baleia extends Animal {

    constructor(nome: string, raca: string, cor: string) {
        super(nome, raca, cor)
    }

    comer(): void {
        const alimento = 'Peixes'
        console.log(`O ${this.nome} come ${alimento}`)
    }
}