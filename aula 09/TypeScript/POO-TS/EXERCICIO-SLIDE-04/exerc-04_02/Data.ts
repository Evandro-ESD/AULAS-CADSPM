export class Data {
    dia: number = 0
    mes: number = 0
    ano: number = 0

    constructor() { }
// 
    exibirData(dia: number, mes: number, ano: number) {

        if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 1990 || ano > 2025) {
            console.log(`Data invalida!!`)
            return
        } else {
            return `${this.dia = dia}/${this.mes = mes}/${this.ano = ano}`
        }
    }
}