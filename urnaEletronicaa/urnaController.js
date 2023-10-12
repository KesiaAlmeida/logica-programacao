import Candidato from "../model/candidato.js"

class urnaController {
    constructor() {

        this.criarCandidatos()

    }

    criarCandidatos() {
        let candidato = [
            new Candidato('Darth Vader' , 'sith' , '8' , '../../../../imagem/candidato-darth-vader.jpg'),
            new Candidato('Spock' , 'vulcano' , '14' , '../../../../imagem/candidato-spock.jpg'),
            new Candidato('Seu Madruga' , 'Vila' , '71' , '../../../../imagem/candidato-seu-Madruga.jpg'),
        ]

        console.log(candidatos)
       
    }
}

window.App new urnaController()

