var x = 2.343588356;
console.log(`${x.toFixed(3)}`); // .toFixed() mostra apenas 3 numeros depois da virgula
console.log(`${parseInt(x)}`); //mostra apenas a parte inteira do numero digitado

var vet = [2, 4, 6, 9];
console.log(vet);
vet.push(20) //adiciona um valor no vetor
console.log(vet)
console.log(vet[0])//mostra a posicao do vetor
console.log(vet[vet.length-1]) //ver a ultima posicao do vetor (-1)
console.log(vet.length) //ver tamanho do vetor
var somArry = vet.map(e => e+2) //soma +2 a todos os valores do vetor
console.log("somArry somado a 2: ", somArry)
var expArry = vet.map(e => e**2) //eleva todos os valores do vetor ao quadrado
console.log("expArry elevado a 2: ", expArry);

//teste insira valores em um vetor
console.log("\nMonte um vetor, defina o tamanho dele e insira valores nele: ")
const input = require("synchro-prompt");
var x = Number(input("Defina o tamanho do vetor: "));
var vetor = [x]

for(var i = 0; i < x; i++){
  console.log(`Valor da posicao ${i}: `)
  vetor.push(Number(input(vetor[i])));
}

vetor.splice(0, 1); //apaga o primeiro valor (o primeiro valor apos a `posicao 0`)
console.log(vetor);

vetor.forEach(vetor1=>{console.log(`vetor pelo forEach: ${vetor1}`)}) //fosrEach percorrera todo o vetor e mostrara todos os itens
vetor.forEach(vetor1=>{console.log(`forEach especifico: ${vetor1[2]}`})