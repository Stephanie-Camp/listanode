//le um numero de 4 digitos e o exibe no console separadamente
const input = require("synchro-prompt");
var num = Number(input("Digite um numero de 4 digitos, por favor: "));

if(num > 999 && num <10000){
  for(var i = 0; i < 4; i++){
    var x = num / (1000/(10**i));
    num = num%(1000/(10**i));
    console.log(`Posicao ${i+1}: `, parseInt(x));
  }
}else{ 
  console.log("O numero digitado nao tem 4 digitos!");
}
