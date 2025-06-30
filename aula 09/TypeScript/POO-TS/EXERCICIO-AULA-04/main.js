"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoas_1 = require("./pessoas");
var profissao_1 = require("./profissao");
var pessoa1 = new pessoas_1.Pessoas("Emily", 9, 710710712016);
var profissao1 = new profissao_1.Profissao(1, "Estudante", "3º ano");
pessoa1.getExibirInfos();
console.log(profissao1.getExibirInfosProfissao());
