export abstract class Veiculos {
    private _modelo: string
    private _cor: string
    private _velocidade: number

    constructor(modelo: string, cor: string) {
        this._modelo = modelo
        this._cor = cor
        this._velocidade = 0

    }

    public get modelo(): string {
        return this._modelo
    }
    public set modelo(value: string) {
        this._modelo = value
    }

    public get cor(): string {
        return this._cor
    }
    public set cor(value: string) {
        this._cor = value
    }
    public get velocidade(): number {
        return this._velocidade
    }
    public set velocidade(value: number) {
        this._velocidade = value
    }
    
}