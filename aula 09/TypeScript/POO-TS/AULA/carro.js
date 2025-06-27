"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    //métodos - método construtor
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = true;
    }
    //método
    iserirMarca(marca) {
        this.marca = marca;
    }
    // métodos - ações
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.modelo} está ligado`);
        }
        else {
            console.log(`${this.modelo} já está ligado!`);
        }
    }
    desligar() {
        if (!this.ligado) {
            this.ligado = false;
            console.log(`${this.modelo} desligado`);
        }
        else {
            console.log(`${this.modelo} desligado!`);
        }
    }
    status() {
    }
}
exports.Carro = Carro;
new Carro("fiat", "uno", 1990);
class Manuten {
    constructor() {
        this.man = new Carro("fiat", "uno", 1990);
    }
}
