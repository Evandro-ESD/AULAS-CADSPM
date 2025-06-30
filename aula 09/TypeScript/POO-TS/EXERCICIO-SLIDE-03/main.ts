import { Carro } from "./carro";
import { Conserto } from "./conserto";


const carro = new Carro(101, 'UNO', 'FIAT', 2020)
carro.exibirInfos()
const conserto = new Conserto(101, 'UNO', 'FIAT', 2020, 200, '30-06-2025')
conserto.exibirInfos()