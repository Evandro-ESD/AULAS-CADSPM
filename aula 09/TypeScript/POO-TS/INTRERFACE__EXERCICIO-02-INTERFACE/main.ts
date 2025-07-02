import { Circulo } from "./Circulo";
import { FormaGeometrica } from "./IFormaGeometrica";
import { Retangulo } from "./Retangulo";

const ret1 = new Retangulo(4, 5)
const cir1 = new Circulo(5)

const forms: FormaGeometrica[] = [ret1, cir1]

for(const form of forms){
    form.exibirValores()
}