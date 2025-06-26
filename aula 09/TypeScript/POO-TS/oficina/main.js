"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const manutencao_1 = require("./manutencao");
//instaciar a classe
const car = new carro_1.Carro("fiat", "uno", 1990);
const man = new manutencao_1.Manutecao('26-06-2025', '12:30', 'trocar pastilha');
// man.data = 30
man.exibirData();
man.exibirHora();
man.exibirServico();
console.log("=======================");
console.log(man.exibirTudo());
