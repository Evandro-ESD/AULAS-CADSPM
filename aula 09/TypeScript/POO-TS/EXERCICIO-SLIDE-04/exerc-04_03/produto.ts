export class Produtos {

    // o (inteiro positivo que varia de 1 até 9999)
    // a quantidade de itens (inteiro não negativo)
    // nome do produto (texto)
    // preço por item (um valor decimal não negativo)

    constructor(private id: number, private qtd: number, private nome: string, private preco: number) {
        this.id = 1
        this.qtd = 0
        this.nome = ''
        this.preco = 0
    }

    getId(): number {
        return this.id
    }
    setId(value: number): void {
        if (this.id <= 1 && this.id > 9999) {
            this.id = value
        } else {
            console.log(`ID: ${this.id} inaválido!!!\n
                Inseira um número inteiro positivo que varia de 1 até 9999`)
            return
        }
    }

    getQtdItens(): number {
        return this.qtd
    }
    setQtdItens(value: number): void {
        this.qtd = value
    }

    getNome(): string {
        return this.nome
    }
    setNome(value: string): void {
        this.nome = value
    }

    getPreco(): number {
        return this.preco
    }
    setPreco(value: number): void {
        this.preco = value
    }

    exibirInfos() {
        console.log(
            `
        ID:    ${this.id}\n
        QTD:   ${this.qtd}\n
        NOME:  ${this.nome}\n
        PRECO: ${this.preco}

            `
        )
    }


}