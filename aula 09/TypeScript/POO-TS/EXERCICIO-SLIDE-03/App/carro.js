"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(id, nome, marca, ano) {
        this._id = id;
        this._nome = nome;
        this._marca = marca;
        this._ano = ano;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }
    get ano() {
        return this._ano;
    }
    set ano(value) {
        this._ano = value;
    }
    exibirInfos() {
        console.log(`
        |=============================== 
        |                              |
        |    ID:    |  ${this.id}             |\n
        |    Nome:  |  ${this.nome}             |\n 
        |    Marca: |  ${this.marca}            |\n 
        |    Ano:   |  ${this.ano}            |\n 
        |
        |==============================|    
            `);
    }
}
exports.Carro = Carro;
