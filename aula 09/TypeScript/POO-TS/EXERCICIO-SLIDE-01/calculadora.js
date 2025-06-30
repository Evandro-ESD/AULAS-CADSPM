"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.potencia = function (a, b) {
        return Math.pow(a, b);
    };
    Calculadora.prototype.gerarMensagem = function (operacao, resultado) {
        return " O resultado da opera\u00E7\u00E3o ".concat(operacao, " = ").concat(resultado);
    };
    Calculadora.prototype.exibirMensagem = function (operacao, resultado) {
        return this.gerarMensagem(operacao, resultado);
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
