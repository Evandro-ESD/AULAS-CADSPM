import { Calculadora } from "./calculadora";

const calculadora = new Calculadora()

let resSoma = calculadora.somar(250,150)
let resSbtracao = calculadora.subtrair(250,150)
let resMultiplicacao = calculadora.multiplicar(6,6)
let resDivisao = calculadora.dividir(600,3)
let resPotencia = calculadora.potencia(2,5)

console.log(calculadora.exibirMensagem('soma', resSoma))
console.log(calculadora.exibirMensagem('subtrair', resSbtracao))
console.log(calculadora.exibirMensagem('multiplicar', resMultiplicacao))
console.log(calculadora.exibirMensagem('dividir', resDivisao))
console.log(calculadora.exibirMensagem('potencia', resPotencia))