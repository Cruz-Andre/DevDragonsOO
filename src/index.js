import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3 )
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10 )
const arqueiroBruno = new Arqueiro('Bruno', 5, 6)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)


console.log(magoAntonio);
console.log(magaJulia);
console.log(arqueiroBruno);
console.log(arqueiroMagoChico);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico]

new PersonagemView(personagens).render()

