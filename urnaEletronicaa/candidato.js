export default class Candidato {
    constructor(nome, legenda, numero,img) {
        this.nome = nome
        this.legenda = legenda
        this.numero = numero
        this.img = img
    }

    get nomeCandidato() {
        return this.nome
    }

    get legendaCandidato() {
        return this.legenda
    }

    get numeroCandidato() {
        return this.numero
    }
}