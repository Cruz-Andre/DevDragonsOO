export class Personagem {
	nome // a declaração fora do constructor é opcional
	vida = 100
	mana = 100
	level
	tipo
	descricao

	constructor(nome, level) {
		this.nome = nome
		this.level = level
	}

	obterInsignia() {
		if (this.level >= 5) {
			return `Implacavel ${this.tipo}`
		}
		return `${this.tipo} iniciante`
	}
}