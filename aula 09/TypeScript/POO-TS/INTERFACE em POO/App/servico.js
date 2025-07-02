"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoProdutos = void 0;
class ServicoProdutos {
    constructor() {
        this.produto = [];
    }
    adicionarProduto(produto) {
        this.produto.push(produto);
    }
    listarProduto() {
        this.produto.forEach(produto => {
            console.log(`${produto.obterInfos()}`);
        });
    }
}
exports.ServicoProdutos = ServicoProdutos;
