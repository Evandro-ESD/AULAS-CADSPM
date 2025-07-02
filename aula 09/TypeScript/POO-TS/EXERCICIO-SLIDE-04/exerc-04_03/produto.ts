export class Produtos {

    // o (inteiro positivo que varia de 1 até 9999)
    // a quantidade de itens (inteiro não negativo)
    // nome do produto (texto)
    // preço por item (um valor decimal não negativo)

    constructor(private id: number, private qtd: number, private nome: string, private preco: number) {

    }

    getId(): number {
        return this.id
    }
    setId(value: number): void {
        if (value >= 1 || value <= 9999) {
            this.id = value
        } else {
            console.log(`ID: ${value} inaválido!!!\n
                Inseira um número inteiro positivo que varia de 1 até 9999`)
            return
        }
    }

    getQtdItens(): number {
        return this.qtd
    }
    setQtdItens(value: number): void {
        if( value >= 1 ){
            this.qtd = value
        }else{
            console.log(`Valor inválido!!!`)
        }
    }

    getNome(): string {
        return this.nome
    }
    setNome(value: string): void {
        if(value === ''){
            this.nome = value
        }else{
            console.log(`Valor 'nome' inválido!!!`)
        }
    }

    getPreco(): number {
        return this.preco
    }
    setPreco(value: number): void {
        if(value >= 0){
            this.preco = value
        }else{
            console.log(`Valor 'preço' inválido!!!`)
        }
    }

    exibirInfos() {
        console.log(
            `
        ID:    ${this.getId()}\n
        QTD:   ${this.getQtdItens()}\n
        NOME:  ${this.getNome()}\n
        PRECO: ${this.getPreco()}

            `
        )
    }


}