const input = require(`synchro-prompt`);

function random(x){
  switch(x){
    case 0:
      x = 2;
      break;
    case 1:
      x = 4;
      break;
    case 2:
      x = 8;
      break;
    case 3:
      x = 0;
      break;
    case 4:
      x = 6;
      break;
    case 5:
      x = 3;
      break;
    case 6:
      x = 9;
      break;
    case 7:
      x = 1;
      break;
    case 8:
      x = 4;
      break;
    case 9:
      x = 5;
      break;
  }

}

var num = Number(input(`Seja bem vindo(a)! \nLEGENDA: \n0 - 2\n1 - 4\n2 - 8\n3 - 0\n4 - 6\n5 - 3\n6 - 9\n7 - 1\n8 - 4\n9 - 5 \nDigite um numero:`));
var vet = num.split(num);
console.log(random(vet));
