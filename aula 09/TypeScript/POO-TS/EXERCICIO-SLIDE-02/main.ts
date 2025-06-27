import { Autor } from "./autor";
import { Livro } from "./livro";

const exibir = new Autor("J. R. R.", "Tolkien")

const autor = new Autor("J. R. R.", "Tolkien") /* instancia da classe autor */
const livro = new Livro("Senhor dos Anéis", autor)/* instancia da classe livro com parametros Nome do livro e instancia da classe livro que contém a infomaçãodo nome completo do autor */

console.log(exibir.getMenssagem())

console.log(livro.getExibirInformacoes())

livro.setLivro("O Silmarillion")
console.log("Novo livro:\n\t" + livro.getExibirInformacoes())