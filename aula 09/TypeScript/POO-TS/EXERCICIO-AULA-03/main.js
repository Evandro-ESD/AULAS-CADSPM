"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produtos_1 = require("./produtos");
var produto1 = new produtos_1.Produtos(12, "pizza", 40);
var mensagem = produto1.getMenssagem();
produto1.getExibirValores(mensagem);
produto1.setPreco(35);
var msgAtualizada = produto1.getMenssagem();
console.log("Pre\u00E7o Atual  \u2714\uFE0F");
produto1.getExibirValores(msgAtualizada);
// console.log(produto1)
