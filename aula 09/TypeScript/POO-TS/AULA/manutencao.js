"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutecao = void 0;
var Manutecao = /** @class */ (function () {
    function Manutecao(data, hora, servico) {
        this.data = data;
        this.hora = hora;
        this.servico = servico;
    }
    //métodos pr[oprios para inserção dos valores nos atributos
    //  - GET (visualizar) e SET (inserir)
    Manutecao.prototype.dataSet = function (data) {
        this.data = data;
    };
    Manutecao.prototype.horaSet = function (hora) {
        this.hora = hora;
    };
    Manutecao.prototype.servicoSet = function (servico) {
        this.servico = servico;
    };
    //métotos GET
    Manutecao.prototype.exibirData = function () {
        console.log("Data: ".concat(this.data));
    };
    Manutecao.prototype.exibirHora = function () {
        console.log("Hora: ".concat(this.hora));
    };
    Manutecao.prototype.exibirServico = function () {
        console.log("Servi\u00E7o: ".concat(this.servico));
    };
    Manutecao.prototype.exibirTudo = function () {
        return "Data: ".concat(this.data, "\nHora: ").concat(this.hora, "\nServi\u00E7p: ").concat(this.servico);
    };
    return Manutecao;
}());
exports.Manutecao = Manutecao;
