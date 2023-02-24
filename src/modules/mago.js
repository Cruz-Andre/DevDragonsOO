import { Personagem } from "./personagem.js"

// o Mago herda as propriedade da classe Personagem
export class Mago extends Personagem {
  //propriedades declaradas
  static tipo = 'Mago'
  static descricao = 'O mago é implacável!'
  elementoMagico
  levelMagico
  inteligencia
  
  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    
    super(nome)// São algumas das propriedades da classe pai Personagem

    this.elementoMagico = elementoMagico
    this.levelMagico = levelMagico
    this.inteligencia = inteligencia
  }

  obterInsignia() {
    if (this.levelMagico >= 5 && this.inteligencia >=5) {
      return `Mestre do ${this.elementoMagico}`
    }
    return super.obterInsignia()
  }

}