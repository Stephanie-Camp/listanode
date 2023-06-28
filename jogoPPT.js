//jogo Pedra-Papel-Tesoura: usuario vs maquina 
const input = require("synchro-prompt");

while (op != 0) {

  let random = Math.floor(Math.random() * 3) + 1;
  var op = Number(input("Seja bem vindo(a)! Vamos jogar? \n1 - PEDRA \n2 - PAPEL \n3 - TESOURA \n0 - SAIR \nEscolha uma opcao: "));

  if (op === random) {
    console.log(`IIH... Parece que temos um empate! \nMas nao desista, que tal tentar novamente?`);
  } else if (op < random && op > 0) {
    if (op === 1 && random === 3) {
      console.log(`Voce jogou pedra! \nO computador jogou tesoura! \nVoce ganhou o/`);
    } else if (op === 1 && random === 2) {
      console.log(`Voce jogou pedra! \nO computador jogou papel! \nVoce perdeu :(`);
    } else {
      console.log(`Voce jogou papel! \nO computador jogou tesoura! \nVoce perdeu :(`);
    }
  } else if (op > random && op < 4) {
    if (op === 3 && random == 1) {
      console.log(`Voce jogou tesoura! \nO computador jogou pedra!\nVoce perdeu :(`);
    } else if (op === 3 && random === 2) {
      console.log(`Voce jogou tesoura! \nO computador jogou papel! \nVoce ganhou o/`);
    } else {
      console.log(`Voce jogou papel! \nO computador jogou pedra! \nVoce ganhou o/`);
    }
  } else if (op === 0) {
    console.log(`Voce escolheu sair. \n  Ate a proxima!`);
  } else {
    console.log(`Opcao invalida! \nNao vale usar truques, hein? \Vamos tentar novamente? :)`);
  }

}
