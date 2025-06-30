export class Produtos {
    private _nomeProduto: string

    private _valorProduto: number

    private _anoProduto: number

    // private ValorProduto:number

    constructor(nomeProduto: string, AnoProduto: number, ValorProduto: number) {
        this.nomeProduto = nomeProduto
        this.valorProduto = ValorProduto
        this.anoProduto = AnoProduto
    }

    public get nomeProduto(): string {
        return this._nomeProduto
    }
    public set nomeProduto(value: string) {
        this._nomeProduto = value
    }

    public get valorProduto(): number {
        return this._valorProduto
    }
    public set valorProduto(value: number) {
        this._valorProduto = value
    }
    public get anoProduto(): number {
        return this._anoProduto
    }
    public set anoProduto(value: number) {
        this._anoProduto = value
    }


    public exibirProduto():void {
        console.log(
            `
                Informações do produto:\n\n
                NomeProduto:  ${this.nomeProduto}\n
                ValorProduto: R$ ${this.valorProduto},00\n
                AnoProduto:   ${this.anoProduto}
            `)

    }
}

