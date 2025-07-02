import { Funcionario } from "./Funcionario";
import { FuncionarioAdm } from "./FuncionarioAdministrativo";
import { FuncionarioOperacional } from "./FuncionarioOperacional";

const funcAdm1 = new FuncionarioAdm("Eumar", 1200, 1000)
const funcOpr1 = new FuncionarioOperacional("Carlos", 1200, 20)



funcAdm1.exbirDados()
console.log("Salário final: R$:", funcAdm1.calcularSalario().toFixed(2))

console.log(`======================`)
funcOpr1.exbirDados()
console.log( "Salário final: R$:", funcOpr1.calcularSalario().toFixed(2))

console.log(`======================`)

const funcionarios:Funcionario[] = [funcAdm1, funcOpr1]

for(const funcionario of funcionarios){
    `${funcionario.exbirDados()}\n`
    console.log(`Salario final: R$ ${funcionario.calcularSalario().toFixed(2)}\n`)
}