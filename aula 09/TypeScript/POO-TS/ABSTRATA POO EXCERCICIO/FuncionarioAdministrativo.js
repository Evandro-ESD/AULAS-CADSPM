"use strict";
// Tem um atributo adicional: bonusMensal
// O salário final é salarioBase + bonusMensal
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
exports.FuncionarioAdm = void 0;
var Funcionario_1 = require("./Funcionario");
var FuncionarioAdm = /** @class */ (function (_super) {
    __extends(FuncionarioAdm, _super);
    function FuncionarioAdm(nome, salarioBase, bonusMensal) {
        var _this = _super.call(this, nome, salarioBase) || this;
        _this.bonusMensal = bonusMensal;
        return _this;
    }
    FuncionarioAdm.prototype.calcularSalario = function () {
        return this.salarioBase + this.bonusMensal;
    };
    FuncionarioAdm.prototype.exbirDados = function () {
        console.log("Nome: ".concat(this.nome, "\nSal\u00E1rio: ").concat(this.salarioBase.toFixed(2)));
    };
    return FuncionarioAdm;
}(Funcionario_1.Funcionario));
exports.FuncionarioAdm = FuncionarioAdm;
