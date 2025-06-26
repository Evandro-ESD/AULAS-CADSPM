"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutecao = void 0;
class Manutecao {
    constructor(data, hora, servico) {
        this.data = data;
        this.hora = hora;
        this.servico = servico;
    }
    //métodos pr[oprios para inserção dos valores nos atributos
    //  - GET (visualizar) e SET (inserir)
    dataSet(data) {
        this.data = data;
    }
    horaSet(hora) {
        this.hora = hora;
    }
    servicoSet(servico) {
        this.servico = servico;
    }
    //métotos GET
    exibirData() {
        console.log(`Data: ${this.data}`);
    }
    exibirHora() {
        console.log(`Hora: ${this.hora}`);
    }
    exibirServico() {
        console.log(`Serviço: ${this.servico}`);
    }
    exibirTudo() {
        return `Data: ${this.data}\nHora: ${this.hora}\nServiçp: ${this.servico}`;
    }
}
exports.Manutecao = Manutecao;
