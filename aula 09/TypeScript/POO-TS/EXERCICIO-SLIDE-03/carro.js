"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(id, nome, marca, ano) {
        this._id = id;
        this._nome = nome;
        this._marca = marca;
        this._ano = ano;
    }
    Object.defineProperty(Carro.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (value) {
            this._ano = value;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.exibirInfos = function () {
        console.log("\n        |=============================== \n        |                              |\n        |    ID:    |  ".concat(this.id, "             |\n\n        |    Nome:  |  ").concat(this.nome, "             |\n \n        |    Marca: |  ").concat(this.marca, "            |\n \n        |    Ano:   |  ").concat(this.ano, "            |\n \n        |\n        |==============================|    \n            "));
    };
    return Carro;
}());
exports.Carro = Carro;
