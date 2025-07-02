"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var conserto_1 = require("./conserto");
var carro = new carro_1.Carro(101, 'UNO', 'FIAT', 2020);
carro.exibirInfos();
var conserto = new conserto_1.Conserto(101, 'UNO', 'FIAT', 2020, 200, '30-06-2025');
conserto.exibirInfos();
