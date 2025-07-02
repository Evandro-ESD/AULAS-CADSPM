"use strict";
// Tem um atributo adicional: horasExtras
// O salário final é salarioBase + (horasExtras * 20)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioOperacional = void 0;
var Funcionario_1 = require("./Funcionario");
var FuncionarioOperacional = /** @class */ (function (_super) {
    __extends(FuncionarioOperacional, _super);
    function FuncionarioOperacional(nome, salarioBase, horasExtras) {
        var _this = _super.call(this, nome, salarioBase) || this;
        _this.horasExtras = horasExtras;
        return _this;
    }
    FuncionarioOperacional.prototype.calcularSalario = function () {
        return this.salarioBase + this.horasExtras * 45;
    };
    FuncionarioOperacional.prototype.exbirDados = function () {
        console.log("Nome: ".concat(this.nome, "\nSal\u00E1rio: ").concat(this.salarioBase.toFixed(2)));
    };
    return FuncionarioOperacional;
}(Funcionario_1.Funcionario));
exports.FuncionarioOperacional = FuncionarioOperacional;
