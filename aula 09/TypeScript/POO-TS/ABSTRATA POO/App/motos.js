"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculo_1 = require("./veiculo");
veiculo_1.Veiculo;
class Moto extends veiculo_1.Veiculo {
    ligar() {
        console.log(`Marca: ${this.marca}. Modelo: ${this.modelo} - está ligada com ronco alto`);
    }
}
exports.Moto = Moto;
