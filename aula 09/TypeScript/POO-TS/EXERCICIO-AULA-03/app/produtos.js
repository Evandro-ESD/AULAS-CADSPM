"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    constructor(codigo, nome, preco) {
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
    }
    getCodigo() {
        return this._codigo;
    }
    setCodigo(value) {
        this._codigo = value;
    }
    getNome() {
        return this._nome;
    }
    setNome(value) {
        this._nome = value;
    }
    getPreco() {
        return this._preco;
    }
    setPreco(value) {
        if (value <= 0) {
            console.log(`🚫⚠️   Preço não alerado o preço não pode ser ZERO ou menor que zero!`);
            return;
        }
        this._preco = value;
    }
    getMenssagem() {
        return (`
            ================================
            =    Informações do produto:   =
            ================================
            =    💻 Codigo: ${this.getCodigo()}             =\n      
            =    📌 Nome: ${this.getNome()}            =\n          
            =    💲 Preco: R$ ${this.getPreco()},00        =    
            ================================
            `);
    }
    getExibirValores(menssagem) {
        console.log(menssagem);
    }
}
exports.Produtos = Produtos;
