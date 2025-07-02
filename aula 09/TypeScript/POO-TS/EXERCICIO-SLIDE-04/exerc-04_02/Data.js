"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data() {
        this.dia = 0;
        this.mes = 0;
        this.ano = 0;
    }
    // 
    Data.prototype.exibirData = function (dia, mes, ano) {
        if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 1990 || ano > 2025) {
            console.log("Data invalida!!");
            return;
        }
        else {
            return "".concat(this.dia = dia, "/").concat(this.mes = mes, "/").concat(this.ano = ano);
        }
    };
    return Data;
}());
exports.Data = Data;
