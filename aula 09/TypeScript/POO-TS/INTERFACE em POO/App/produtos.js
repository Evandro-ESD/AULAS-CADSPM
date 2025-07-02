"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    obterInfos() {
        return `Id: ${this.id}, Produto: ${this.id}, Preço: ${this.id}`;
    }
}
exports.Produtos = Produtos;
