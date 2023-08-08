const input = require('synchro-prompt');

let soma = function(x, y){ return x + y; }
let subt = function(x, y){ return x - y; }
let mult = function(x, y){ return x * y; }
let div = function(x, y){ return x / y; }
let resto = function(x, y){ return x % y; }
let exp = function(x, y){ return x ** y; }
let raiz = function(x){ return Math.sqrt(x);}
let fat = function(x){
  var fat = 0;
  var i = x;
  if(x === 0 || x === 1){ fat = 1;
  }else if(x > 1){
    while(i != 1){
      fat = x * (i - 1);
      x = fat;
      i--;
    }
  }else{ fat = "Valor invalido. Tente novamente!"; }
  return fat;
}

while(op != 0){
  var a, b;
  var op = Number(input(`\n  Seja bem vindo(a)!
. ------------------ .
| 1 - SOMA           | 
| 2 - SUBTRACAO      |
| 3 - MULTIPLICACAO  |         . ---------------------------------------- .
| 4 - DIVISAO        |        |  SELECIONE A OPERACAO QUE DESEJA REALIZAR  |
| 5 - RESTO DIVISAO  |        |          OU APERTE  0  PARA SAIR.          |
| 6 - EXPONENCIAL    |         --------------------------------------------
| 7 - RAIZ           |
| 8 - FATORIAL       |
| 0 - SAIR           |      
 -------------------- 
 OPERACAO A REALIZAR: `));

   if(op > 0 && op < 7){
    a = Number(input(`Digite um numero: `));
    b = Number(input(`Digite outro: `));
  }if (op >= 7 && op < 9){
    a = Number(input(`Digite um numero: `));
  }

  switch(op){
    case 1:
      console.log(`Resultado da soma: `, soma(a, b));
      break;
    case 2:
      console.log(`Resultado da subtracao: `, subt(a, b));
      break;
    case 3:
      console.log(`Resultado da multiplicacao: `, mult(a, b));
      break;
    case 4:
      console.log(`Resultado da divisao: `, div(a, b));
      console.log(`Resto da operacao: `, resto(a, b));
      break;
    case 5:
      console.log(`Resto da divisao: `, resto(a, b));
      break;
    case 6:
      console.log(`Resultado da potencia: `, exp(a, b));
      break;
    case 7:
      console.log(`Valor da raiz: `, raiz(a));
      break;
    case 8:
      console.log(`Resultado do fatorial: `, fat(a));
      break;
    case 0:
      console.log(`\nVoce saiu!`);
      break;
    default:
      console.log(`\nValor invalido!`);
  }
  
}