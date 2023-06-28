//le um numero qualquer para exibi-lo no console separadamente 
const input = require("synchro-prompt");
var num = (input("Digite qualquer valor inteiro: "));
var lim = num.length;
num = Number(num);

for (var i = 0; i < lim; i++) {
  var x = num / ((10 ** (lim - 1)) / (10 ** i));
  num = num % ((10 ** (lim - 1)) / (10 ** i));
  console.log(`Posicao ${i + 1}: `, parseInt(x));
}
