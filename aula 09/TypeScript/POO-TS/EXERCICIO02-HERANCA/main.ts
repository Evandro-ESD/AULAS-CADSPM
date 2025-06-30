import { Cachorro } from "./cachorro";
import { Gato } from "./gato";

const gato = new Gato("Félix", 105, 'Angorá', 'preto')
gato.fazerSom()
gato.comer()
console.log('Cor do pelo: ' + gato.getCorPelo())


const cachorro = new Cachorro('Spike', 73, 'Bulldogue Inglês', 'cinza')
cachorro.fazerSom()
gato.comer()
console.log('Cor do pelo: ' + cachorro.getCorPelo())