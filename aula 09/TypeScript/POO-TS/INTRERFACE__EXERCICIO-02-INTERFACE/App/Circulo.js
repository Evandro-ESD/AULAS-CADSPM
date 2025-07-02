"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
    exibirValores() {
        console.log(`
                Área do círculo: ${this.calcularArea().toFixed(2)}
                Perímetro do círculo: ${this.calcularPerimetro().toFixed(2)}
            `);
    }
}
exports.Circulo = Circulo;
