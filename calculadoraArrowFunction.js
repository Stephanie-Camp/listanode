const input = require('synchro-prompt');

let soma = (x, y) => {
  return x + y;
}
let subt = (x, y) => {
  return x - y;     
}
let mult = (x, y) => {
  return x * y;
}
let div = (x, y) => {
  return x / y;
}
let resto = (x, y) => {
  return x%y;
}
let exp = (x, y) => {
  return x ** y;
}
let raiz = (x)  => { 
  return Math.sqrt(x);
}
let fat = (x) => {
  var fat = 0;
  var i = x;
  if(x === 0 || x === 1){
    fat = 1;
  }else if(x > 1){
    while(i != 1){
      fat = x * (i - 1);
      x = fat;
      i--;
    }
  }else{ fat = "\nValor invalido. Tente novamente!"; }
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
    a = Number(input(`Digite um valor: `));
    b = Number(input(`Digite um valor: `));
  }if (op >= 7 && op < 9){
    a = Number(input(`Digite um valor: `));
  }
  
  switch(op){
    case 1:
      console.log(`Resultado = `, soma(a, b));
      break;
    case 2:
      console.log(`Resultado = `, subt(a, b));
      break;
    case 3:
      console.log(`Resultado = `, mult(a, b));
      break;
    case 4:
      console.log(`Resultado = `, div(a, b));
      console.log(`Resto da divisao = `, resto(a, b));
      break;
    case 5:
      console.log(`Resultado = `, resto(a, b));
      break;
    case 6:
      console.log(`Resultado = `, exp(a, b));
      break;
    case 7:
      console.log(`Resultado = `, raiz(a));
      break;
    case 8:
      console.log(`Resultado = `, fat(a));
      break;
    case 0:
      console.log(`\nVoce optou por sair!`);
      break;
    default:
      console.log(`\nOpcao invalida!`);
  }
  
}