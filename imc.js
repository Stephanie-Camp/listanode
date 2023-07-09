const input = require("synchro-prompt");
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
