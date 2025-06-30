"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
        this.dia = 0;
        this.mes = 0;
        this.ano = 0;
    }
    // 
    exibirData(dia, mes, ano) {
        if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 1990 || ano > 2025) {
            console.log(`Data invalida!!`);
            return;
        }
        else {
            return `${this.dia = dia}/${this.mes = mes}/${this.ano = ano}`;
        }
    }
}
exports.Data = Data;
