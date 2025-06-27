export class Produtos {
    private _codigo: number
    private _nome: string
    private _preco: number


    constructor(codigo: number, nome: string, preco: number) {
        this._codigo = codigo
        this._nome = nome
        this._preco = preco
    }


    public getCodigo(): number {
        return this._codigo
    }
    public setCodigo(value: number) {
        this._codigo = value
    }
    public getNome(): string {
        return this._nome
    }
    public setNome(value: string) {
        this._nome = value
    }
    public getPreco(): number {
        return this._preco
    }
    public setPreco(value: number) {
        if(value <=0 ){
            console.log(`🚫⚠️   Preço não alerado o preço não pode ser ZERO ou menor que zero!`)
            return
        }
        this._preco = value
    }

    getMenssagem():string {
        return( `
            ================================
            =    Informações do produto:   =
            ================================
            =    💻 Codigo: ${this.getCodigo()}             =\n      
            =    📌 Nome: ${this.getNome()}            =\n          
            =    💲 Preco: R$ ${this.getPreco()},00        =    
            ================================
            `
    )}

    getExibirValores(menssagem: string): void {
        console.log(menssagem)
    }



    // getExibirValores(codigo:number, nome:string, preco:number):void{
    //     console.log(`
    //         ================================
    //         =    Informações do produto:   =
    //         ================================
    //         =       Codigo: ${this.codigo}             =\n      
    //         =       Nome: ${this.nome}            =\n          
    //         =       Preco: R$ ${this.preco},00        =    
    //         ================================
    //         `)
    // }
}