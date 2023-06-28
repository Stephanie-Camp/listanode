//jogo Pedra-Papel-Tesoura: usuario vs maquina 
const input = require("synchro-prompt");
let random = Math.floor(Math.random()*3)+1;
var op = Number(input("Seja bem vindo(a)! Vamos jogar? \n1 - PEDRA \n2 - PAPEL \n3 - TESOURA \nEscolha uma opcao: "));

  if (op === random){
    console.log(`IIH... Parece que temos um empate! \nMas nao desista, que tal tentar novamente?`);
  }else if (op < random && op > 0){    
    if(op === 1 && random === 3){
      console.log(`Voce jogou pedra! \nO computador jogou tesoura! \nVoce ganhou o/`);
    }else if(op === 1){
      op = "pedra";
      random = "papel";
      console.log(`Voce jogou ${op}! \nO computador jogou ${random}! \nVoce perdeu :(`); 
    }else{
      op = "papel";
      random = "tesoura";
      console.log(`Voce jogou ${op}! \nO computador jogou ${random}! \nVoce perdeu :(`);
    }
  }else if(op > random && op < 4){    
    if(op === 3 && random == 1){
      console.log(`Voce jogou tesoura! \nO computador jogou pedra!\nVoce perdeu :(`);
    }else if(op === 3){
      op = "tesoura"; 
      random = "papel";
      console.log(`Voce jogou ${op}! \nO computador jogou ${random}! \nVoce ganhou o/`);
    }else{
      op = "papel";
      random = "pedra";
      console.log(`Voce jogou ${op}! \nO computador jogou ${random}! \nVoce ganhou o/`);
    }
  }else{
    console.log(`Opcao invalida! \nNao vale usar truques, hein? \Vamos tentar novamente? :)`);
  }