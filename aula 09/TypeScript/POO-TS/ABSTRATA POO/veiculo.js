"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.exibirInfos = function () {
        return "Marca: ".concat(this.marca, ". Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
