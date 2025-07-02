import { Produtos } from "./produtos";

export class ServicoProdutos {

    private produto: Produtos[] = []

    adicionarProduto(produto: Produtos): void {
        this.produto.push(produto)
    }

    listarProduto(): void {
        this.produto.forEach(produto => {
            console.log(`${produto.obterInfos()}`)
        })
    }
}