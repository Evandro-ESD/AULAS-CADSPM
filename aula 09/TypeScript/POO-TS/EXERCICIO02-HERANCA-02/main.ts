import { Funcionario } from "./Funcionario"
import { Pessoas } from "./Pessoas"

const func = new Funcionario(1, 'Carlos', 2156478, 912)
const pessoa = new Pessoas(2, 'OutraPessoa', 818)


func.mostrarString()
pessoa.mostrarString()
func.setNome('Chaves')
func.mostrarString()
