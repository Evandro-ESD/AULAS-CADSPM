import { Calculadora } from "./calculadora";

const somar = new Calculadora(250,150)
const subtrair = new Calculadora(5,4)
const multiplicar = new Calculadora(5,4)
const dividir = new Calculadora(600,3)
const potencia = new Calculadora(2,5)

let resSoma = somar.somar()
let resSbtracao = somar.subtrair()
let resMultiplicacao = somar.multiplicar()
let resDivisao = somar.dividir()
let resPotencia = somar.potencia()

console.log(somar.exibirMensagem('soma', resSoma))
console.log(subtrair.exibirMensagem('subtrair', resSbtracao))
console.log(multiplicar.exibirMensagem('multiplicar', resMultiplicacao))
console.log(dividir.exibirMensagem('dividir', resDivisao))
console.log(potencia.exibirMensagem('potencia', resPotencia))