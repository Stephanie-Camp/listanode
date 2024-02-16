const input = require('synchro-prompt');
var professores = [];
var alunos = [];
var nome, senha, user, idade, cpf, materia;
let newUser = (menu, login, senha, nome, idade, materia, cpf, sobrenome) => {
    if(menu === 'P'){
        let newProfessor = JSON.parse(
        `{
        "${login}":{
            "nome": "${nome}",
            "materia": "${materia}",
            "info":{
                "idade": "${idade}",
                "cpf": "${cpf}",
                "senha": "${senha}",
            }   
        }}`)
        let professor = Object.assign(professores, newProfessor);
        professores.push(professor);
        return true;
    /*}else if(menu === 'A'){
        let aluno = JSON.parse(
        `{
        "${user}":{
            "nome": "${nome}",
            "sobrenome": "${sobrenome}",
            "materia": "${materia}",
            "ra": "${id()}",
            "info":{
                "idade": "${idade}",
                "cpf": "${cpf}",
                "senha": "${senha}"
            }
        }}`)
        return true; */
    }else{
        return false;
    }
}
function id(){
    let id = new Array(8);
    for(var i = 0; i < id.length; i++){
        id.push(parseInt(Math.random() * 9));
    }
    id.join('');
}


while (menu != 'F') {
    var menu = (input(`                                    .
 .-----------------------------.    | P - PROFESSOR
|  SISTEMA DE GESTAO ACADEMICA  |   | A - ALUNO
 -------------------------------    | F - ENCERRAR
 BEM VINDO(A)! ESCOLHA COMO LOGAR: `)).toUpperCase();

    switch (menu) {
        case 'P':
            do {
                var opc = Number(input(`
._________        .________
|  MENU           | 1 - CADASTRAR PROFESSOR |
| INICIAL         | 2 - LOGAR NO SISTEMA    |
                  | 3 - RETORNAR    ________|
MODULO DO GESTOR,
INSIRA A OPÇAO DESEJADA: `));
                switch (opc) {
                    case 1:
                        user = input('Defina um login: ');
                        senha = input('Crie uma senha: ');
                        nome = input('Informe seu nome: ');
                        idade = Number(new Date().getFullYear()) - Number(input('Informe o ano de nascimento:'));
                        materia = input('Materia responsavel: ');
                        cpf = (input('Informe seu CPF: '));
                        let teste = newUser(menu, user, senha, nome, idade.toString(), materia, cpf);
                        console.log(professores, teste)
                        console.log('------   CADASTRO EFETIVADO.   ------');
                        break; //fim do cadastro de professor
                    case 2:

                        break; //fim do login do professor
                    default: console.log('OPCAO NAO ENCONTRADA.');
                }
            } while (opc != 3); //fim do menu do professor cadastro-login
            break; //encerramento do modulo do professor
        case 'A':
            do {
                var opc = Number(input(`
._________        .________
|  MENU           | 1 - CADASTRAR PROFESSOR |
| INICIAL         | 2 - LOGAR NO SISTEMA    |
                  | 3 - RETORNAR    ________|
CARO ALUNO(A),        
INSIRA A OPÇAO DESEJADA: `));
                switch (opc) {
                    case 1:

                        break; //fim do cadastro de aluno
                    case 2:

                        break; //fim do login do aluno
                    default: console.log('OPCAO INEXISTENTE.');
                }
            } while (opc != 3); //fim do modulo do aluno cadastro-login
            break; //encerramento do modulo do aluno
        case 'F': console.log(' LOGIN ENCERRADO.'); break;
        default: console.log('OPÇAO NAO ENCONTRADA! \nTENTE NOVAMENTE.'); //escolha da opcao errada

    }
}