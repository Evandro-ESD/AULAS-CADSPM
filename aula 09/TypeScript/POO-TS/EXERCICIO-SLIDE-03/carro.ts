export class Carro {
    private _id: number

    private _nome: string

    private _marca: string

    private _ano: number


    constructor(id: number, nome: string, marca: string, ano: number) {
        this._id = id
        this._nome = nome
        this._marca = marca
        this._ano = ano
    }


    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    public get marca(): string {
        return this._marca
    }
    public set marca(value: string) {
        this._marca = value
    }

    public get ano(): number {
        return this._ano
    }
    public set ano(value: number) {
        this._ano = value
    }

    exibirInfos(): void {
        console.log(
            `
        |=============================== 
        |                              |
        |    ID:    |  ${this.id}             |\n
        |    Nome:  |  ${this.nome}             |\n 
        |    Marca: |  ${this.marca}            |\n 
        |    Ano:   |  ${this.ano}            |\n 
        |
        |==============================|    
            `
        )


    }

}