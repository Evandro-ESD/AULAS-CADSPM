"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var autor_1 = require("./autor");
var livro_1 = require("./livro");
var exibir = new autor_1.Autor("J. R. R.", "Tolkien");
var autor = new autor_1.Autor("J. R. R.", "Tolkien"); /* instancia da classe autor */
var livro = new livro_1.Livro("Senhor dos Anéis", autor); /* instancia da classe livro com parametros Nome do livro e instancia da classe livro que contém a infomaçãodo nome completo do autor */
console.log(exibir.getMenssagem());
console.log(livro.getExibirInformacoes());
livro.setLivro("O Silmarillion");
console.log("Novo livro:\n\t" + livro.getExibirInformacoes());
