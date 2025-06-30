import { Carro } from "./carro";

export class Conserto extends Carro {
    private _preco: number;

    private _data: string;


    constructor(id: number, nome: string, marca: string, ano: number, preco: number, data: string) {
        super(id, nome, marca, ano)
        this._preco = preco
        this._data = data
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }

    public override exibirInfos() {
        console.log(
            `
        |=============================== 
        |                              |
        |    ID:    |  ${this.id}             |\n
        |    Nome:  |  ${this.nome}             |\n 
        |    Marca: |  ${this.marca}            |\n 
        |    Ano:   |  ${this.ano}            |\n 
        |    Preço: |  R$ ${this.preco},00       |\n 
        |    Data:  |  ${this.data}      | 
        |
        |==============================|    
            `
        )

    }

}