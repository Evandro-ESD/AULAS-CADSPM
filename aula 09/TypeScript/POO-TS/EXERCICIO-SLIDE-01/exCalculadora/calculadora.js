"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    // resultado: number
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    // dataSet(data: string) {
    //     this.data = data
    // }
    setA(a) {
        this.a = a;
    }
    setB(b) {
        this.b = b;
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
    somar() {
        return this.a + this.b;
    }
    subtrair() {
        return this.a - this.b;
    }
    multiplicar() {
        return this.a * this.b;
    }
    dividir() {
        return this.a / this.b;
    }
    potencia() {
        return Math.pow(this.a, this.b);
    }
    gerarMensagem(operacao, resultado) {
        return ` O resultado da operação ${operacao} ${this.a} e ${this.b} =  ${resultado}`;
    }
    exibirMensagem(operacao, resultado) {
        return this.gerarMensagem(operacao, resultado);
    }
}
exports.Calculadora = Calculadora;
