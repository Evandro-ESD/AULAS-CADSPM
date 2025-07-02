import { Carro } from "./carros";
import { Moto } from "./motos";

const carro = new Carro("Toyota", "Corolla", 2001)
const moto = new Moto("Yamaha", "MT09", 2025)


console.log( carro.exibirInfos())
carro.ligar()

console.log(moto.exibirInfos())
moto.ligar()