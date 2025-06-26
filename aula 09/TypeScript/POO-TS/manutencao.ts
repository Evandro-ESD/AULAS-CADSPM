export class Manutecao {
    private data: string
    // data: number
    hora: string
    servico: string

    constructor(data: string, hora: string, servico: string) {
        this.data = data
        this.hora = hora
        this.servico = servico
    }

    //métodos pr[oprios para inserção dos valores nos atributos
    //  - GET (visualizar) e SET (inserir)
    dataSet(data: string) {
        this.data = data
    }
    horaSet(hora: string) {
        this.hora = hora
    }
    servicoSet(servico: string) {
        this.servico = servico
    }

    //métotos GET
    exibirData() {
        console.log(`Data: ${this.data}`)
    }

    exibirHora() {
        console.log(`Hora: ${this.hora}`)
    }

    exibirServico() {
        console.log(`Serviço: ${this.servico}`)
    }

    exibirTudo() {
        return `Data: ${this.data}\nHora: ${this.hora}\nServiçp: ${this.servico}`
    }

}