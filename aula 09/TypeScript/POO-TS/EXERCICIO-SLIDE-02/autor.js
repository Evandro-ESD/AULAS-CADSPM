"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSobreNome() {
        return this.sobreNome;
    }
    setSobreNome(sobreNome) {
        this.sobreNome = sobreNome;
    }
    getNomeCompleto() {
        return this.nome + this.sobreNome;
    }
    getMenssagem() {
        return `${this.getNomeCompleto()}`;
    }
}
exports.Autor = Autor;
