//le um numero de 4 digitos e o exibe no console separadamente 
const input = require("synchro-prompt");
var num = (input("Digite um numero de 4 digitos, por favor: "));
var lim = num.length
num = Number(num);

for(var i = 0; i < lim; i++){
  var x = num / ((10**(lim-1))/(10**i));
  num = num%((10**(lim-1))/(10**i));
  console.log(`Posicao ${i+1}: `, parseInt(x));
}
