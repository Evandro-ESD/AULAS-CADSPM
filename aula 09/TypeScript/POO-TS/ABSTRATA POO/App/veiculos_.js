"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
class Veiculos {
    constructor(modelo, cor) {
        this._modelo = modelo;
        this._cor = cor;
        this._velocidade = 0;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get cor() {
        return this._cor;
    }
    set cor(value) {
        this._cor = value;
    }
    get velocidade() {
        return this._velocidade;
    }
    set velocidade(value) {
        this._velocidade = value;
    }
}
exports.Veiculos = Veiculos;
