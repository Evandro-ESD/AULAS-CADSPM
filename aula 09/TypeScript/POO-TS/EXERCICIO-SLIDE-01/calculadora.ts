export class Calculadora {
    a: number
    b: number
    // resultado: number

    constructor(a: number, b: number) {
        this.a = a
        this.b = b
    }

    // dataSet(data: string) {
    //     this.data = data
    // }

    setA(a: number) {
        this.a = a
    }
    setB(b: number) {
        this.b = b
    }
    getA() {
        return this.a
    }
    getB() {
        return this.b
    }

    somar() {
        return this.a + this.b
    }
    subtrair() {
        return this.a - this.b
    }
    multiplicar() {
        return this.a * this.b
    }
    dividir() {
        return this.a / this.b
    }
    potencia() {
        return Math.pow(this.a, this.b)
    }

    gerarMensagem(operacao: string, resultado: number) {
        return ` O resultado da operação ${operacao} ${this.a} e ${this.b} =  ${resultado}`
    }
    exibirMensagem(operacao: string, resultado: number) {
        return this.gerarMensagem(operacao, resultado)
    }
}