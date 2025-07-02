"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
var Produtos = /** @class */ (function () {
    // o (inteiro positivo que varia de 1 até 9999)
    // a quantidade de itens (inteiro não negativo)
    // nome do produto (texto)
    // preço por item (um valor decimal não negativo)
    function Produtos(id, qtd, nome, preco) {
        this.id = id;
        this.qtd = qtd;
        this.nome = nome;
        this.preco = preco;
    }
    Produtos.prototype.getId = function () {
        return this.id;
    };
    Produtos.prototype.setId = function (value) {
        if (value >= 1 || value <= 9999) {
            this.id = value;
        }
        else {
            console.log("ID: ".concat(value, " inav\u00E1lido!!!\n\n                Inseira um n\u00FAmero inteiro positivo que varia de 1 at\u00E9 9999"));
            return;
        }
    };
    Produtos.prototype.getQtdItens = function () {
        return this.qtd;
    };
    Produtos.prototype.setQtdItens = function (value) {
        if (value >= 1) {
            this.qtd = value;
        }
        else {
            console.log("Valor inv\u00E1lido!!!");
        }
    };
    Produtos.prototype.getNome = function () {
        return this.nome;
    };
    Produtos.prototype.setNome = function (value) {
        if (value === '') {
            this.nome = value;
        }
        else {
            console.log("Valor 'nome' inv\u00E1lido!!!");
        }
    };
    Produtos.prototype.getPreco = function () {
        return this.preco;
    };
    Produtos.prototype.setPreco = function (value) {
        if (value >= 0) {
            this.preco = value;
        }
        else {
            console.log("Valor 'pre\u00E7o' inv\u00E1lido!!!");
        }
    };
    Produtos.prototype.exibirInfos = function () {
        console.log("\n        ID:    ".concat(this.getId(), "\n\n        QTD:   ").concat(this.getQtdItens(), "\n\n        NOME:  ").concat(this.getNome(), "\n\n        PRECO: ").concat(this.getPreco(), "\n\n            "));
    };
    return Produtos;
}());
exports.Produtos = Produtos;
