import { Animal } from "./Animal";

export class Morcego extends Animal {

    constructor(nome: string, raca: string, cor: string) {
        super(nome, raca, cor)
    }

    comer(): void {
        const alimento = 'Frutas'
        console.log(`O ${this.nome} come ${alimento}`)
    }

    // comer(): void {
    //     console.log(`O ${this.nome} da raça  ${this.raca} tem a cor ${this.cor} está comendo frutas`)

    // }
}