//retirar todos os valores '=num' do vetor
const input = require("synchro-prompt");

do{
var x = Number(input("Defina o tamanho do vetor: "));
var v = [x];
var vet = [];

//adicione valores dentro do vetor
console.log(`Digite ${x} valores para inserirmos no vetor: \n`);
for(var i = 0; i < x; i++){
  v.push((input(v[i] + "\n")));
}
v.splice(0, 1);
console.log(`\nSeu vetor: [${v}]`);

//confere os valores dentro do vetor e remove caso sejam igual a num
var num = Number(input("\nDigite o valor voce deseja filtrar no seu vetor: "));
for(var i = 0; i < x; i++){
  if(v[i] != num){
    vet.push(v[i]);
  }
}
console.log(`Vetor final = [${vet}]`);

var op = Number(input("\nAperte qualquer tecla caso queira continuar ou aperte  0  para sair. \nDeseja continuar?\n"));
}while(op != 0);

console.log("\nVoce saiu.")
