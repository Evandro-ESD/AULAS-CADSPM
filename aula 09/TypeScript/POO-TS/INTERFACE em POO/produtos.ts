import { IProduto } from "./interface_prod";

export class Produtos implements IProduto{

    constructor(public id:number, public nome:string, public preco:number){}
    
    obterInfos(): string {
        return `Id: ${this.id}, Produto: ${this.id}, Preço: ${this.id}`
    }

}