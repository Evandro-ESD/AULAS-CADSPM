export class Calculadora {

    constructor() {

    }

    somar(a:number, b:number) {
        return a + b
    }

    subtrair(a:number, b:number) {
        return a - b
    }
    multiplicar(a:number, b:number) {
        return a * b
    }
    dividir(a:number, b:number) {
        return a / b
    }
    potencia(a:number, b:number) {
        return Math.pow(a, b)
    }

    gerarMensagem(operacao: string, resultado: number) {
        return ` O resultado da operação ${operacao} = ${resultado}`
    }
    exibirMensagem(operacao: string, resultado: number) {
        return this.gerarMensagem(operacao, resultado)
    }
}