"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissao = void 0;
var Profissao = /** @class */ (function () {
    function Profissao(matricula, nomeProfissao, setor) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }
    Profissao.prototype.getExibirInfosProfissao = function () {
        return "\n            Matricula: ".concat(this.matricula, "\n\n            Profiss\u00E3o: ").concat(this.nomeProfissao, "\n\n            Setor: ").concat(this.setor, "\n            ");
    };
    return Profissao;
}());
exports.Profissao = Profissao;
