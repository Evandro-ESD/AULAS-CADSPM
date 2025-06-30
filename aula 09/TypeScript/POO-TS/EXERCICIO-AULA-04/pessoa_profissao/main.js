"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoas_1 = require("./pessoas");
const profissao_1 = require("./profissao");
const pessoa1 = new pessoas_1.Pessoas("Emily", 9, 710710712016);
const profissao1 = new profissao_1.Profissao(1, "Estudante", "3º ano");
pessoa1.getExibirInfos();
console.log(profissao1.getExibirInfosProfissao());
