//Sequencia de Fibonacci
const input = require("synchro-prompt");
var num = Number(input("SEQUENCIA DE FIBONACCI! \nDigite quantos numeros voce deseja ver: ")); 

var res = 0;
var x = 0;
var a = 1;

for(var i = 0; i < num; i++){
  x = res + a;
  a = res;
  res = x;
  console.log("Resultado: ", res);
}
