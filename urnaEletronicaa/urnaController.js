import Candidato from "../model/candidato.js"

export default class Teclado {

    constructor() {

        this.teclado = document.querySelectorAll(' .botao-numerico')
        this.tecladoDeAcao = document.querySelectorAll(' .botao-acao')
        this.primeiroNumero = document.querySelector(' .primeiro-numero')
        this.segundoNumero = document.querySelector(' .segundo-numero')
        this.telaEL = document.querySelector(' .tela')
        this.visorEL = document.querySelector(' .visor')
        this.visorCandidatoEL = document.querySelector(' .visorCandidato')
        this.telaConfirmacao = document.querySelector(' .visor-confirmacao')
        this.botaoBrancoEL = document.querySelector(' .botao-branco')
        this.candidatoVotadoEL = document.querySelector(' .nome-candidato')
        this.visorConfirmacaoCandidato = document.querySelector(' .visor-confirmacao-candidato')

            this.candidatos [
                new Candidato('Darth Vader' , 'SITH' , 8, '../../"./candidato-darth-vader.jpg"'),
                new Candidato('spock' , '' , 14, '../.),
                new Candidato('princesa Kitana' , '' , 21, '../
            ]

    }
}