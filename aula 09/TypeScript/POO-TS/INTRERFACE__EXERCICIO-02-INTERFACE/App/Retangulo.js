"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
    exibirValores() {
        console.log(`
                Área do retângulo: ${this.calcularArea().toFixed(2)}
                Perímetro do retângulo: ${this.calcularPerimetro().toFixed(1)}
            `);
    }
}
exports.Retangulo = Retangulo;
