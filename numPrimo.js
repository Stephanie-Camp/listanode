//numeros primos 
const input = require("synchro-prompt");
var x = Number(input("Digite um numero: "));

if(x === 1 || x < 1){
  console.log(`${x} nao e um numero primo`);
}

for(var i = 2; i <= x; i++){
  if((i > 1 && i != x) || x === 1){
    if(x%i === 0){
      console.log(`${x} nao e um numero primo`);
      break;
    }
  }else{
    console.log(`${x} e um numero primo!`);  
  }
}
