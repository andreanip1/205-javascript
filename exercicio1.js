//let nome =  prompt("Qual seu nome?");
let idade = Number(prompt("Digite a sua idade"));
let valor = Number(prompt("Digite o valor que você precisa emprestado?"));
let salario = Number(prompt("Quanto você recebe por mês?"));

if (22>idade && idade>55 && 1000>valor && valor>15*salario) {
    alert("NÃO ACEITO");
}

else {
    alert("ACEITO")
}
