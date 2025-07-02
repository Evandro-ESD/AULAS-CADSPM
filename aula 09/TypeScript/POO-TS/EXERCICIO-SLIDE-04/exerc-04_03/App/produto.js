"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    // o (inteiro positivo que varia de 1 até 9999)
    // a quantidade de itens (inteiro não negativo)
    // nome do produto (texto)
    // preço por item (um valor decimal não negativo)
    constructor(id, qtd, nome, preco) {
        this.id = id;
        this.qtd = qtd;
        this.nome = nome;
        this.preco = preco;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        if (value >= 1 || value <= 9999) {
            this.id = value;
        }
        else {
            console.log(`ID: ${value} inaválido!!!\n
                Inseira um número inteiro positivo que varia de 1 até 9999`);
            return;
        }
    }
    getQtdItens() {
        return this.qtd;
    }
    setQtdItens(value) {
        if (value >= 1) {
            this.qtd = value;
        }
        else {
            console.log(`Valor inválido!!!`);
        }
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        if (value === '') {
            this.nome = value;
        }
        else {
            console.log(`Valor 'nome' inválido!!!`);
        }
    }
    getPreco() {
        return this.preco;
    }
    setPreco(value) {
        if (value >= 0) {
            this.preco = value;
        }
        else {
            console.log(`Valor 'preço' inválido!!!`);
        }
    }
    exibirInfos() {
        console.log(`
        ID:    ${this.getId()}\n
        QTD:   ${this.getQtdItens()}\n
        NOME:  ${this.getNome()}\n
        PRECO: ${this.getPreco()}

            `);
    }
}
exports.Produtos = Produtos;
