export abstract class Animal {

    constructor(public nome: string, public raca: string, public cor: string) { }
    abstract comer(nome:string): void

}