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
exports.Gato = void 0;
var animal_1 = require("./animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome, idade, raca, corPelo) {
        var _this = _super.call(this, nome, idade, raca) || this;
        _this.corPelo = corPelo;
        return _this;
    }
    Gato.prototype.getCorPelo = function () {
        return this.corPelo;
    };
    Gato.prototype.setCorPelo = function (corPelo) {
        this.corPelo = corPelo;
    };
    /* Polimorfismo */
    Gato.prototype.fazerSom = function () {
        console.log("".concat(this.getNome(), " faz o som: Miauuu"));
    };
    return Gato;
}(animal_1.Animal));
exports.Gato = Gato;
