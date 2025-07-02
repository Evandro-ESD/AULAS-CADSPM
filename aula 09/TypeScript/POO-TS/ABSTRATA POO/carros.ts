import { Veiculo } from "./veiculo"

export class Carro extends Veiculo{

    ligar():void{
        console.log(`Marca: ${this.marca}. Modelo: ${this.modelo} - está ligado com motor silencioso`)
    }
}

