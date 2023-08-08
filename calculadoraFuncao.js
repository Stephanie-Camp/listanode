const input = require('synchro-prompt');

function soma (x , y){
  let soma = x + y;
  return `RESULTADO = ${soma}`;
}
function subt (x , y){
  let subt = x - y;
  return `RESULTADO = ${subt}`;
}
function mult(x , y){
  let mult = x * y;
  return `RESULTADO = ${mult}`;
}
function div (x , y){
  let div = x / y;
  return `RESULTADO = ${div}`;
}
function resto(a, b){
  let resto = a % b;
  return `RESTO DA DIVISAO = ${resto}`;
}
function exp(x, y){
  let exp = x ** y;
  return `RESULTADO = ${exp}`;
}
function raiz(x){
  let raiz = Math.sqrt(x);
  return `RESULTADO = ${raiz}`;
}
function fat(x){
  var i = x;
  var fat = 0;
  if(x === 0 || x === 1){
    fat = 1;
  }else if(x > 1){
    while(i != 1){
      fat = x * (i - 1);
      x = fat;
      i--;
    }
  }else{fat = "Valor invalido. \nTente um numero positivo!";}
  return `RESULTADO = ${fat}`;
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
    b = Number(input('Digite outro numero: '));
  }else if (op >= 7 && op < 9){
    a = Number(input(`Digite um numero: `));
  }
  
  switch(op){
    case 1:
      console.log(soma(a, b));
      break;
    case 2:
      console.log(subt(a, b));
      break;
    case 3:
      console.log(mult(a, b));
      break;
    case 4:
      console.log(div(a, b));
      console.log(resto(a, b));
      break;
    case 5:
      console.log(resto(a, b));
      break;
    case 6:
      console.log(exp(a, b));
      break;
    case 7:
      console.log(raiz(a));
      break;
    case 8:
      console.log(fat(a));
      break;
    case 0:
      console.log(`\nVoce escolheu sair!`);
      break;
    default:
      console.log(`Opcao invalida. \nTente novamente!`);
  }

}