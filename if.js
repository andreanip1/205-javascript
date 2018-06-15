let nome = prompt("Quem é você?");
// alert("Seja bem vindo, " + nome); //concatenação com "+"" caiu em 2015
alert(`Seja bem vindo, ${nome}`);  //template string, facilita a concatenação 
console.log("O usuário "+nome+" acessou a página");

/*Estruturas de controle
Procedural

if (booleano){código}
ex.:

let chovendo = false
if (chovendo) {
    alert("Levar guarda-chuvas"); 
}
//

if (chovendo){
    alert("Levar guarda-chuva")
}
else {
    alert("Leva o guarda-chuvas mesmo assim, vai chover mais tarde");
} 

// 
let nota = prompt("Qual foi a nota do aluno?");
nota = Number(nota);

//isso pode ser simplificado por:
    let nota = Number(prompt("Qual foi a nota do aluno?"))//

if(isNaN(nota)) {
    alert("Erro:  Valor inválido");
}
else if (nota <5) {
    alert("Reprovado")
}
else if (nota>=7){
    alert("Aprovado!)
}
else {
    alert("Exame!");
}
//

