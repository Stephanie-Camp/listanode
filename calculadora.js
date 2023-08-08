const input = require("synchro-prompt");
let exp = Math.pow(num1, num2);

console.log(`  CALCULADORA
| a - Soma
| b - Subtracao
| c - Multiplicacao
| d - Divisao
| e - Exponenciacao
| f- Resto da divisao `);
var op = input("\nDigite qual operacao voce deseja realizar: ").toLowerCase();
var num1 = Number(input("\nInforme o primeiro numero: "));
var num2 = Number(input("Informe o segundo numero: "));
console.log();

switch(op){
  case "a":
    console.log("Resultado da soma: ", (num1+num2));
    break;
  case "b":
    console.log("Resultado da subtracao: ", (num1-num2));
    break;
  case "c":
    console.log("Resultado da multiplicacao: ", (num1*num2));
    break;
  case "d":
    console.log("Resultado da divisao: ", (num1/num2));
    break;
  case "e":
    console.log("Resultado da exponenciacao: ", (exp)); //pode ser escrito como (num1**num2)
    break;
  case "f":
    console.log("Resto da divisao entre o primeiro e o segundo numero: ", (num1%num2));
    break;
  default: 
    console.log("Opcao invalida! Tente novamente.");
}
