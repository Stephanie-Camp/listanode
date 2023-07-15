const input = require('synchro-prompt');
var vet = [];
var nome, id, pass, name, a, b;

while(op != 3){
  var op = Number(input(`
----SISTEMA DE LOGIN E CADASTRO----
  ------------------------------            --------------------------------------  
 | 1 - INICIAR NOVO CADASTRO    |          | Seja bem vindo(a)! Escolha uma opcao |
 | 2 - LOGAR NO SISTEMA         |          |       ou aperte  3  para sair!       |
 | 3 - SAIR.                    |           --------------------------------------
  ------------------------------
 Digite uma opcao: `));

  switch(op){
    case 1: //captura nome, idade, senha e armazenar no vetor
      console.log();
      nome = input("Digite o seu nome, por favor: ");
      name = nome.toUpperCase(); //para impedir erros na leitura da string
      id = Number(input("Informe sua idade: "));
      pass = Number(input("Digite uma senha: "));  
      vet = [name, id, pass]; //vetor armazenando os dados do meu usuario 
      console.log(`\nCADASTRO REALIZADO COM SUCESSO!`);
      
      break;  
    case 2: //mostrar vetor - dados da pessoa cadastrada  
      while(a != 0){
        console.log();
        nome = input("Digite o seu nome, por favor: ");
        name = nome.toUpperCase(); //evitar error na leitura da string
        
        if(name === vet[0]){          
          while(b != 0){
            pass = Number(input("Digite a sua senha, por favor: "));

            if(pass === vet[2]){
              console.log(`${vet[0]} tem ${vet[1]} anos.`);
            
            }else{
              console.log();
              console.log("SENHA INVALIDA!\n"); 
              b = Number(input("Gostaria de tenta novamente? \n0 - Nao \n1 - Sim \nInforme a sua opcao: ")); //para o usuario nao ter que voltar todo o processo do incio
            }
          } 
        }else{
          console.log();
          console.log("NOME INVALIDO!\n");
          a = Number(input("Gostaria de tenta novamente? \n0 - Nao \n1 - Sim \nInforme a sua opcao: ")); //para o usuario nao ter que voltar ao menu sempre que errar
        }
      }
      
      break;
    case 3:
      console.log("\nVOCE SAIU!");
      break;
    default:
      console.log();
      console.log("Opcao nao encontrada. \nTente novamente!");
  }
}
