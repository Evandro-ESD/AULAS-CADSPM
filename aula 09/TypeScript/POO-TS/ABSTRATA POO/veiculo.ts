export abstract class Veiculo {

    constructor(public marca:string, public modelo:string, public ano:number){
    }

    abstract ligar():void

    exibirInfos():string{
        return `Marca: ${this.marca}. Modelo: ${this.modelo}, Ano: ${this.ano}`
    }
}