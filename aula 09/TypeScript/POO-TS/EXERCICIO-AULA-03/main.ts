import { Produtos } from "./produtos";

const produto1 = new Produtos(12, "pizza", 40)

let mensagem = produto1.getMenssagem()
produto1.getExibirValores(mensagem)

produto1.setPreco(35)
let msgAtualizada = produto1.getMenssagem()
console.log(`Preço Atual  ✔️`)
produto1.getExibirValores(msgAtualizada)

// console.log(produto1)