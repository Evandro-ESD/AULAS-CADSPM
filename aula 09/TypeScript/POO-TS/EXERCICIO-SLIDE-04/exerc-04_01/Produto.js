"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
var Produtos = /** @class */ (function () {
    // private ValorProduto:number
    function Produtos(nomeProduto, AnoProduto, ValorProduto) {
        this.nomeProduto = nomeProduto;
        this.valorProduto = ValorProduto;
        this.anoProduto = AnoProduto;
    }
    Object.defineProperty(Produtos.prototype, "nomeProduto", {
        get: function () {
            return this._nomeProduto;
        },
        set: function (value) {
            this._nomeProduto = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "valorProduto", {
        get: function () {
            return this._valorProduto;
        },
        set: function (value) {
            this._valorProduto = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "anoProduto", {
        get: function () {
            return this._anoProduto;
        },
        set: function (value) {
            this._anoProduto = value;
        },
        enumerable: false,
        configurable: true
    });
    Produtos.prototype.exibirProduto = function () {
        console.log("\n                Informa\u00E7\u00F5es do produto:\n\n\n                NomeProduto:  ".concat(this.nomeProduto, "\n\n                ValorProduto: R$ ").concat(this.valorProduto, ",00\n\n                AnoProduto:   ").concat(this.anoProduto, "\n            "));
    };
    return Produtos;
}());
exports.Produtos = Produtos;
