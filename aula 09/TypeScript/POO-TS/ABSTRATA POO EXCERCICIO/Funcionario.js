"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    Funcionario.prototype.exbirDados = function () { "Nome: ".concat(this.nome, "\nR$: ").concat(this.salarioBase.toFixed(2)); };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
