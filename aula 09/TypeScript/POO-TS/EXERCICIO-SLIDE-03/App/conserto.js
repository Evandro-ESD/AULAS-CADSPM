"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conserto = void 0;
const carro_1 = require("./carro");
class Conserto extends carro_1.Carro {
    constructor(id, nome, marca, ano, preco, data) {
        super(id, nome, marca, ano);
        this._preco = preco;
        this._data = data;
    }
    get preco() {
        return this._preco;
    }
    set preco(value) {
        this._preco = value;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    exibirInfos() {
        console.log(`
        |=============================== 
        |                              |
        |    ID:    |  ${this.id}             |\n
        |    Nome:  |  ${this.nome}             |\n 
        |    Marca: |  ${this.marca}            |\n 
        |    Ano:   |  ${this.ano}            |\n 
        |    Preço: |  R$ ${this.preco},00       |\n 
        |    Data:  |  ${this.data}      | 
        |
        |==============================|    
            `);
    }
}
exports.Conserto = Conserto;
