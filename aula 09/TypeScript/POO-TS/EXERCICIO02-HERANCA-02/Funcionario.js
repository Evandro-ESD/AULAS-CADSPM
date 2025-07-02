"use strict";
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
exports.Funcionario = void 0;
var Pessoas_1 = require("./Pessoas");
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(codigo, nome, rg, matricula) {
        var _this = _super.call(this, codigo, nome, rg) || this;
        _this.matricula = matricula;
        return _this;
    }
    Funcionario.prototype.mostrarString = function () {
        console.log("O nome do funcion\u00E1rio \u00E9: ".concat(this.getNome()));
    };
    return Funcionario;
}(Pessoas_1.Pessoas));
exports.Funcionario = Funcionario;
