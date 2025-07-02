import { Produtos } from "./produtos";
import { ServicoProdutos } from "./servico";

const servico = new ServicoProdutos()
const produto1 = new Produtos(1, "Teclado", 100)
const produto2 = new Produtos(2, "Notebook", 3100)


servico.adicionarProduto(produto1)
servico.adicionarProduto(produto2)
servico.listarProduto()