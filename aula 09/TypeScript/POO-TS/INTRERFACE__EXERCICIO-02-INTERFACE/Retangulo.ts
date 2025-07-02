import { FormaGeometrica } from "./IFormaGeometrica";

export class Retangulo implements FormaGeometrica {

    constructor(public altura: number, public largura: number) { }
    calcularArea(): number {
        return this.altura * this.largura
    }

    calcularPerimetro(): number {
        return 2 * (this.altura + this.largura)

    }

    exibirValores(): void {
        console.log(
            `
                Área do retângulo: ${this.calcularArea().toFixed(2)}
                Perímetro do retângulo: ${this.calcularPerimetro().toFixed(1)}
            `)

    }
}