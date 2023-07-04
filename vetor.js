//retirar todos os valores '2' do vetor
const input = require("synchro-prompt");
var x = Number(input("Defina o tamanho do vetor: "));
var v = [x];
var vet = [];

console.log(`Digite ${x} valores para inserirmos no vetor: \n`)
for(var i = 0; i < x; i++){
  v.push(Number(input(v[i])));
}
v.splice(0, 1);
console.log(`Seu vetor: ${v}`);

for(var i = 0; i < x; i++){
  if(v[i] != 2){
    vet.push(v[i]);
  }
}
console.log();
console.log(`Vetor = [${vet}]`);
