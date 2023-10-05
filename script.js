function mediaAluno() {




//document.write("Olá,mundo!");
//console.log("Imprimindo no console!");
//window.alert("Texto no modal do navegador!");

//logica de programacao
//problema : receber 3 notas de um aluno,
//calcular e apresentar a media e o resultado
//se o aluno foi aprovado, reprovado ou ficou de exame.

console.log("inicio do programa");


//declaração das "variaveis"
const nota1 = parseInt(document.getElementById('nota1').value);
const nota2 = parseInt(document.getElementById('nota2').value);
const nota3 = parseInt(document.getElementById('nota3').value);

//calculo da média
const media=(nota1 + nota2 + nota3) / 3;


document.getElementById('resultado').innerHTML='A media do aluno é:' + media +'<br>';


if (media >= 7) {
    document.getElementById('resultado').innerHTML += 'APROVADO';
} else if (media >= 5) {
    document.getElementById('resultado').innerHTML += 'EXAME';
} else {
    document.getElementById('resultado').innerHTML += 'REPROVADO';
}


console.log('fim do programa');

}




