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
        this.id = 1;
        this.qtd = 0;
        this.nome = '';
        this.preco = 0;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        if (this.id <= 1 && this.id > 9999) {
            this.id = value;
        }
        else {
            console.log(`ID: ${this.id} inaválido!!!\n
                Inseira um número inteiro positivo que varia de 1 até 9999`);
            return;
        }
    }
    getQtdItens() {
        return this.qtd;
    }
    setQtdItens(value) {
        this.qtd = value;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(value) {
        this.preco = value;
    }
    exibirInfos() {
        console.log(`
        ID:    ${this.id}\n
        QTD:   ${this.qtd}\n
        NOME:  ${this.nome}\n
        PRECO: ${this.preco}

            `);
    }
}
exports.Produtos = Produtos;
