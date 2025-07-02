"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuncionarioAdministrativo_1 = require("./FuncionarioAdministrativo");
var FuncionarioOperacional_1 = require("./FuncionarioOperacional");
var funcAdm1 = new FuncionarioAdministrativo_1.FuncionarioAdm("Eumar", 1200, 1000);
var funcOpr1 = new FuncionarioOperacional_1.FuncionarioOperacional("Carlos", 1200, 20);
funcAdm1.exbirDados();
console.log("Salário final: R$:", funcAdm1.calcularSalario().toFixed(2));
console.log("======================");
funcOpr1.exbirDados();
console.log("Salário final: R$:", funcOpr1.calcularSalario().toFixed(2));
console.log("======================");
var funcionarios = [funcAdm1, funcOpr1];
for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
    var funcionario = funcionarios_1[_i];
    "".concat(funcionario.exbirDados(), "\n");
    console.log("Salario final: R$ ".concat(funcionario.calcularSalario().toFixed(2), "\n"));
}
