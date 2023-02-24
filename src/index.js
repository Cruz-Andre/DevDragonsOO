import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 'fogo', 4, 3 )
const magaJulia = new Mago('Julia', 'gelo', 7, 10 )
const arqueiroBruno = new Arqueiro('Bruno', 5)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 'Ar', 4, 8)
const guerreiroJorge = new Guerreiro('Jorge', 10)

console.log(magoAntonio);
console.log(magaJulia);
console.log(arqueiroBruno);
console.log(arqueiroMagoChico);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge]

new PersonagemView(personagens).render()

