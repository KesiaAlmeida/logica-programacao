export default class Candidato {
    constructor(nome, legenda, numero,img) {   
        this.nome = nome
        this.legenda = legenda
        this.numero = numero
        this.img = img
    }
     //** construtor, método executado no momento que a classe é instanciada, os atributos da classe são definidos dentro deste método. declarei o método construtor e entre parenteses definir a classe  ao ser instaciada, depois definir os atributos das classes passando para cada um os argumentos do método.**//

    get nomeCandidato() {
        return this.nome
    }

    get legendaCandidato() {
        return this.legenda
    }

    get numeroCandidato() {
        return this.numero
    }
    //*A sintaxe get vincula uma propriedade de objeto a uma função que será chamada quando essa propriedade for pesquisada.*//
}