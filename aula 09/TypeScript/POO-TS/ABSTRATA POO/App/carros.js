"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    ligar() {
        console.log(`Marca: ${this.marca}. Modelo: ${this.modelo} - está ligado com motor silencioso`);
    }
}
exports.Carro = Carro;
