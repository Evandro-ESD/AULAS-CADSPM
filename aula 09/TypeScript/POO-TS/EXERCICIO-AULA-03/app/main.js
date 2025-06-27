"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = require("./produtos");
const produto1 = new produtos_1.Produtos(12, "pizza", 40);
let mensagem = produto1.getMenssagem();
produto1.getExibirValores(mensagem);
produto1.setPreco(35);
let msgAtualizada = produto1.getMenssagem();
console.log(`Preço Atual  ✔️`);
produto1.getExibirValores(msgAtualizada);
// console.log(produto1)
