import { Veiculo } from "./veiculo";

Veiculo

export class Moto extends Veiculo{
    ligar(): void {
        console.log(`Marca: ${this.marca}. Modelo: ${this.modelo} - está ligada com ronco alto`)


    }
}