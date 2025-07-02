import { Animal } from "./Animal";
import { Baleia } from "./Baleia";
import { Morcego } from "./Morcego";

const baleia1 = new Baleia("Baleia", "", "azul")
const morcego = new Morcego("Morcego", "sul", "branco")

const animais: Animal[] = [baleia1, morcego]

// morcego.comer()
// baleia1.comer()

for(const animal of animais){
    animal.comer(animal.nome)
}