"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor() {
    }
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        return a / b;
    }
    potencia(a, b) {
        return Math.pow(a, b);
    }
    gerarMensagem(operacao, resultado) {
        return ` O resultado da operação ${operacao} = ${resultado}`;
    }
    exibirMensagem(operacao, resultado) {
        return this.gerarMensagem(operacao, resultado);
    }
}
exports.Calculadora = Calculadora;
