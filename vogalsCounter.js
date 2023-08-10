const input = require('synchro-prompt');

function contaVogais(x){
  var qntd = 0;
  for (var i = 0; i < vet.length; i++){
    if(vet[i] === "a"){
      qntd++;
    }else if(vet[i] === "e"){
      qntd++;
    }else if(vet[i] === "i"){
      qntd++;
    }else if(vet[i] === "o"){
      qntd++;
    }else if(vet[i] === "u"){
      qntd++;
    }
  }
  return qntd;
}

var frase = input("Digite uma palavra ou frase por favor: ").toLowerCase();
var vet = frase.split("");
console.log(`Quantidade de vogais: ${contaVogais(frase)}`);
