"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
var Produtos = /** @class */ (function () {
    function Produtos(codigo, nome, preco) {
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
    }
    Produtos.prototype.getCodigo = function () {
        return this._codigo;
    };
    Produtos.prototype.setCodigo = function (value) {
        this._codigo = value;
    };
    Produtos.prototype.getNome = function () {
        return this._nome;
    };
    Produtos.prototype.setNome = function (value) {
        this._nome = value;
    };
    Produtos.prototype.getPreco = function () {
        return this._preco;
    };
    Produtos.prototype.setPreco = function (value) {
        if (value <= 0) {
            console.log("\uD83D\uDEAB\u26A0\uFE0F   Pre\u00E7o n\u00E3o alerado o pre\u00E7o n\u00E3o pode ser ZERO ou menor que zero!");
            return;
        }
        this._preco = value;
    };
    Produtos.prototype.getMenssagem = function () {
        return ("\n            ================================\n            =    Informa\u00E7\u00F5es do produto:   =\n            ================================\n            =    \uD83D\uDCBB Codigo: ".concat(this.getCodigo(), "             =\n      \n            =    \uD83D\uDCCC Nome: ").concat(this.getNome(), "            =\n          \n            =    \uD83D\uDCB2 Preco: R$ ").concat(this.getPreco(), ",00        =    \n            ================================\n            "));
    };
    Produtos.prototype.getExibirValores = function (menssagem) {
        console.log(menssagem);
    };
    return Produtos;
}());
exports.Produtos = Produtos;
