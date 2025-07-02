"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
var Veiculos = /** @class */ (function () {
    function Veiculos(modelo, cor) {
        this._modelo = modelo;
        this._cor = cor;
        this._velocidade = 0;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (value) {
            this._cor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "velocidade", {
        get: function () {
            return this._velocidade;
        },
        set: function (value) {
            this._velocidade = value;
        },
        enumerable: false,
        configurable: true
    });
    return Veiculos;
}());
exports.Veiculos = Veiculos;
