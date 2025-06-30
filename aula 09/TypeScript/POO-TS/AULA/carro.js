"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    //métodos - método construtor
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = true;
    }
    //método
    Carro.prototype.iserirMarca = function (marca) {
        this.marca = marca;
    };
    // métodos - ações
    Carro.prototype.ligar = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("".concat(this.modelo, " est\u00E1 ligado"));
        }
        else {
            console.log("".concat(this.modelo, " j\u00E1 est\u00E1 ligado!"));
        }
    };
    Carro.prototype.desligar = function () {
        if (!this.ligado) {
            this.ligado = false;
            console.log("".concat(this.modelo, " desligado"));
        }
        else {
            console.log("".concat(this.modelo, " desligado!"));
        }
    };
    Carro.prototype.status = function () {
    };
    return Carro;
}());
exports.Carro = Carro;
new Carro("fiat", "uno", 1990);
var Manuten = /** @class */ (function () {
    function Manuten() {
        this.man = new Carro("fiat", "uno", 1990);
    }
    return Manuten;
}());
