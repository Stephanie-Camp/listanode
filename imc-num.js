const input = require("synchro-prompt");

console.log(`Bem-vindo(a)! O que deseja fazer?
  ---------------------------------------------------------
    1 - Calcular o IMC e saber a classificacao.
    2 - Saber se o numero e maior, menor ou igual a zero.
  ---------------------------------------------------------`);
var op = Number(input("\nDigite sua opcao: "));

switch(op){

  case 1:
    var peso = Number(input("Insira o seu peso: "));
    var alt = Number(input("Insira a sua altura: "));
    var imc = (peso/(alt*alt)).toFixed(2);
    
    if(imc > 0 && imc <= 18.5){
      console.log(`Seu imc e igual a: ${imc} \nVoce esta classificado como: Magreza.`);
    }else if(imc > 18.5 && imc <= 24.9){
      console.log(`Seu imc e igual a: ${imc} \nVoce esta classificado como: Normal.`);
    }else if(imc > 25 && imc <= 30){
      console.log(`Seu imc e igual a: ${imc} \nVoce esta classificado como: Sobrepeso.`);
    }else{
      console.log(`Seu imc e igual a: ${imc} \nVoce esta classificado como: Obesidade.`);
    }
    break;

  case 2:
    var x = Number(input("Digite um numero por favor: "));
      if(x > 0){
        console.log("O numero e maior que zero!");
      }else if(x < 0){
        console.log("O numero e menor que zero!");
      }else{
        console.log("O numero e zero!");
      }
    break;
  default:
    console.log("Opcao invalida. \nTente novamente, por favor!");
}
