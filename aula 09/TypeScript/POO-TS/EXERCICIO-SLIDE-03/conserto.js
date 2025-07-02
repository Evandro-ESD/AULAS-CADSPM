"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conserto = void 0;
var carro_1 = require("./carro");
var Conserto = /** @class */ (function (_super) {
    __extends(Conserto, _super);
    function Conserto(id, nome, marca, ano, preco, data) {
        var _this = _super.call(this, id, nome, marca, ano) || this;
        _this._preco = preco;
        _this._data = data;
        return _this;
    }
    Object.defineProperty(Conserto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (value) {
            this._preco = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conserto.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Conserto.prototype.exibirInfos = function () {
        console.log("\n        |=============================== \n        |                              |\n        |    ID:    |  ".concat(this.id, "             |\n\n        |    Nome:  |  ").concat(this.nome, "             |\n \n        |    Marca: |  ").concat(this.marca, "            |\n \n        |    Ano:   |  ").concat(this.ano, "            |\n \n        |    Pre\u00E7o: |  R$ ").concat(this.preco, ",00       |\n \n        |    Data:  |  ").concat(this.data, "      | \n        |\n        |==============================|    \n            "));
    };
    return Conserto;
}(carro_1.Carro));
exports.Conserto = Conserto;
