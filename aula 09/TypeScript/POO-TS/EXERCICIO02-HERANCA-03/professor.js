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
exports.Professor = void 0;
var pessoas_1 = require("./pessoas");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.registrarProfessor = function (id, nome, idade) {
        this.setId(id);
        this.setNome(nome);
        var idadeValida = this.setIdade(idade);
        if (!idadeValida) {
            console.log("Professor com menos de 18 anos!, cadastro acima de 18 anos");
        }
        else {
            console.log("Professor registrado com sucesso!");
        }
    };
    Professor.prototype.exibirProfessor = function () {
        console.log("Professor - ID:".concat(this.getId(), ", nome: ").concat(this.getNome(), ", \n        idade: ").concat(this.getIdade()));
    };
    return Professor;
}(pessoas_1.Pessoas));
exports.Professor = Professor;
