"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = require("./Circulo");
const Retangulo_1 = require("./Retangulo");
const ret1 = new Retangulo_1.Retangulo(4, 5);
const cir1 = new Circulo_1.Circulo(5);
const forms = [ret1, cir1];
for (const form of forms) {
    form.exibirValores();
}
