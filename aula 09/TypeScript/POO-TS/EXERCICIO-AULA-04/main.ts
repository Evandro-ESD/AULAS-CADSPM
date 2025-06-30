import { Pessoas } from "./pessoas";
import { Profissao } from "./profissao";


const pessoa1 = new Pessoas("Emily", 9, 710710712016)
const profissao1 = new Profissao(1, "Estudante", "3º ano")

pessoa1.getExibirInfos()
console.log(profissao1.getExibirInfosProfissao())