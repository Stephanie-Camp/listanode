const input = require('synchro-prompt');
var v = [];
var name, age, pass, a, b;

while (op != 3) {
  var op = Number(input(`
----SISTEMA DE LOGIN E CADASTRO----
  ------------------------------            --------------------------------------  
 | 1 - INICIAR NOVO CADASTRO    |          | Seja bem vindo(a)! Escolha uma opcao |
 | 2 - LOGAR NO SISTEMA         |          |       ou aperte  3  para sair!       |
 | 3 - SAIR.                    |           --------------------------------------
  ------------------------------
 Digite uma opcao: `));

  switch(op){
    case 1:
      name = input(`\nVoce escolheu iniciar um novo cadastro! \nDigite o seu nome: `).toUpperCase();
      age = Number(input(`Digite a sua idade: `));
      pass = input(`Defina a sua senha: `);
      var vet = [name, age, pass];
      v.push(vet);
      console.log("\nCADASTRO REALIZADO COM SUCESSO!");
      console.log(`VETOR: `, v)
      break;
    case 2:
      name = input(`\nPara logar: \nDigite seu nome: `).toUpperCase();
      pass = input("Digite a sua senha: ");

      v.forEach(user => {
       let index = user.indexOf(name);
      //  
        if(index != -1){
          //
          if(pass === user[2]){
            console.log(`${name} tem ${age} anos!`);
          }else{
            console.log(`Senha incorreta! \nTente novamente.`);
          }
          //  
        }else{
          console.log(`Nome invalido.`);
        }
      //
      })
      break;
    case 3:
      console.log(`\nVoce escolheu sair!`);
      break;
    default:
      console.log(`Opcao invalida! \nTente novamente.`);      
  }
  
}