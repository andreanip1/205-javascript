// while(condicao) {condição}
//while (boolean)(codigo)

let andar = prompt("Qual andar você está?");
let subindo = false; 

while(andar !==0){
    alert(`Espera mais um pouquinho. Andar atual: ${andar}`);
    andar = andar -1; // ou andar -=1, andar--;
    if(andar ===1){
        subindo = true;
    }
    if(andar===5){
        subindo === false;
    }
    if(subindo){
        andar++;
    }
    else{
        andar--;
    }
}
alert("Pode sair, você chegou ao térreo!")
