//menu de compra 
const input = require("synchro-prompt");
var t = 0;

while (p != -1) {
  console.log(`\n    Seja bem vindo(a)!:
   --------------------
  | Produto 1 - R$2,98 |    . ------------------------------------ .
  | Produto 2 - R$4,50 |   |  Por favor, escolha uma opcao de 1 a 5 |
  | Produto 3 - R$9,98 |   |        ou digite  -1  para sair!       |
  | Produto 4 - R$4,49 |    ----------------------------------------
  | Produto 5 - R$6,87 |
   -------------------- \n`)
  var p = Number(input("Digite uma opcao: "));
  var qntd = 0;

  switch (p) {
    case (1):
      var qntd = parseInt(input("Digite quantas unidades deseja obter: "));
      t = t + (2.98 * qntd);
      console.log(`\nProduto ${p}  -  Quantidade: ${qntd} \nTotal:  R$ ${t.toFixed(2)}`);
      break;
    case (2):
      var qntd = Number(input("Digite quantas unidades deseja obter: "));
      t = t + (4.50 * qntd);
      console.log(`\nProduto ${p}  -  Quantidade: ${qntd} \nTotal:  R$ ${t.toFixed(2)}`);
      break;
    case (3):
      var qntd = Number(input("Digite quantas unidades deseja obter: "));
      t = t + (9.98 * qntd);
      console.log(`\nProduto ${p}  -  Quantidade: ${qntd} \nTotal:  R$ ${t.toFixed(2)}`);
      break;
    case (4):
      var qntd = Number(input("Digite quantas unidades deseja obter: "));
      t = t + (4.49 * qntd);
      console.log(`\nProduto ${p}  -  Quantidade: ${qntd} \nTotal:  R$ ${t.toFixed(2)}`);
      break;
    case (5):
      var qntd = Number(input("Digite quantas unidades deseja obter: "));
      t = t + (6.87 * qntd);
      console.log(`\nProduto ${p}  -  Quantidade: ${qntd} \nTotal:  R$ ${t.toFixed(2)}`);
      break;
    case (-1):
      console.log("\nVoce escolheu sair. \nAgradecemos a preferencia!");
      break;
    default:
      console.log("\nAlgo deu errado... \nTente mais uma vez.");
  }
}

console.log(`\nValor final da compra: R$ ${t.toFixed(2)}\n`);
