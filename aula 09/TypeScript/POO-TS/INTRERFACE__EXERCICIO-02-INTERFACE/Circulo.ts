import { FormaGeometrica } from "./IFormaGeometrica";

export class Circulo implements FormaGeometrica {

    constructor(public raio: number) { }
    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2)
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio

    }

    exibirValores(): void {
        console.log(
            `
                Área do círculo: ${this.calcularArea().toFixed(2)}
                Perímetro do círculo: ${this.calcularPerimetro().toFixed(2)}
            `)

    }
}