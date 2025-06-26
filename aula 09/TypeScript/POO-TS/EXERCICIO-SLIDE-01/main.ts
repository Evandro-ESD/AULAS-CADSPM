import { Calculadora } from "./calculadora";

const somar = new Calculadora()

let resSoma = somar.somar(250,150)
let resSbtracao = somar.subtrair(250,150)
let resMultiplicacao = somar.multiplicar(6,6)
let resDivisao = somar.dividir(600,3)
let resPotencia = somar.potencia(2,5)

console.log(somar.exibirMensagem('soma', resSoma))
console.log(somar.exibirMensagem('subtrair', resSbtracao))
console.log(somar.exibirMensagem('multiplicar', resMultiplicacao))
console.log(somar.exibirMensagem('dividir', resDivisao))
console.log(somar.exibirMensagem('potencia', resPotencia))