"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissao = void 0;
class Profissao {
    constructor(matricula, nomeProfissao, setor) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }
    getExibirInfosProfissao() {
        return `
            Matricula: ${this.matricula}\n
            Profissão: ${this.nomeProfissao}\n
            Setor: ${this.setor}
            `;
    }
}
exports.Profissao = Profissao;
