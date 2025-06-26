export class Carro {
    // atributos - variaveis
    marca: string 
    modelo: string 
    ano: number 
    ligado: boolean

    //métodos - método construtor
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.ligado = true
    }

    //método
    iserirMarca(marca: string) {
        this.marca = marca
    }

    // métodos - ações
    ligar(): void {
        if (!this.ligado) {
            this.ligado = true
            console.log(`${this.modelo} está ligado`)
        } else {
            console.log(`${this.modelo} já está ligado!`)
        }
    }

    desligar(): void {
        if (!this.ligado) {
            this.ligado = false
            console.log(`${this.modelo} desligado`)
        } else {
            console.log(`${this.modelo} desligado!`)
        }
    }

    status(): void {

    }


}

new Carro("fiat", "uno", 1990)

class Manuten {
    man = new Carro("fiat", "uno", 1990)
}