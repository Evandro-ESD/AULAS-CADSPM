import { Carro } from "./carro";
import { Manutecao } from "./manutencao";

//instaciar a classe
const car  = new Carro("fiat", "uno", 1990)
const man =  new Manutecao( '26-06-2025', '12:30', 'trocar pastilha')

// man.data = 30
man.exibirData()
man.exibirHora()
man.exibirServico()
console.log("=======================")
console.log(man.exibirTudo())

