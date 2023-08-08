const input = require('synchro-prompt');
var vet = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
var a, b;
var v = [];

for (var i = 1; i < vet.length; i++) {

  while (v.length != 20) {
    var op = Number(input(`\n  Seja bem vindo(a)! Veja aqui os assentos disponiveis: 
  [${vet[0][1]}]  [${vet[0][2]}]  [${vet[0][3]}]  [${vet[0][4]}]  [${vet[0][5]}]  [${vet[0][6]}]  [${vet[0][7]}]  [${vet[0][8]}]  [${vet[0][9]}]  [${vet[0][10]}]   ---------   FIRST CLASS
             
  [${vet[1][1]}]  [${vet[1][2]}]  [${vet[1][3]}]  [${vet[1][4]}]  [${vet[1][5]}]  [${vet[1][6]}]  [${vet[1][7]}]  [${vet[1][8]}]  [${vet[1][9]}]  [${vet[1][10]}]   ---------   NORMAL CLASS

  Tipos de assento:
  1 - ASSENTO FRONTAL (PRIMEIRA CLASSE)
  2 - ASSENTO AO FUNDO (NORMAL)
  
  Digite aqui o numero correspondente a fileira que voce prefere se sentar: `));

    op = --op;

    switch (op) {
      case 0:
        a = Number(input("  Informe o numero do assento que deseja obter: "));
        if (vet[op][a] === "X") {
          console.log("\nDesculpe, esse assento nao se encontra disponivel! \nSelecione outro, por favor.");

        } else if (a < 11 && a > 0) {
          console.log("\nASSENTO ADQUIRIDO!");
          v.push(vet[op][a]);
        } else {
          console.log("\nOPCAO INVALIDA! \nSelecione um assento valiod, por favor.");
        }
        vet[op][a] = "X";
        break;

      case 1:
        b = Number(input("  Informe o numero do assento que deseja obter: "));
        if (vet[op][b] === "X") {
          console.log("\nDesculpe, esse assento nao se encontra disponivel! \nSelecione outro, por favor.");
        } else if (b < 11 && b > 0) {
          console.log("\nASSENTO ADQUIRIDO!");
          v.push(vet[op][b]);
        } else {
          console.log("\nOPCAO INVALIDA! \nSelecione um assento valido, por favor.");
        }
        vet[op][b] = "X";
        break;

      default:
        console.log("\nOpcao nao disponivel! \nSelecione uma opcao valida, por favor!");
    }//switch

  }//while
}//for principal

console.log("\nInfelizmente todos os assentos ja foram comprados. \nVolte outro dia!");
