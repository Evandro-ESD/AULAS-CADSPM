"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfos() {
        return `Marca: ${this.marca}. Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}
exports.Veiculo = Veiculo;
