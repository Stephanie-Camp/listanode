/*metodo para capturar informaçoes e organizar json dinamicamente
Alunos.(id do ALuno) = localizar o aluno mais facilmente
*/
//quando queremos adicionar um novo tipo de json = nomeamos de assinatura
const input = require('synchro-prompt');
/*funcionara como banco de dados, definir regras (de acordo com o seu programa)
amazenara: ID, nome, idade, notas
*/
function addAluno(nome, idade, notas){ //responsavel por adicionar um novo aluno
    //fazendo assinatura do nosso objeto
    let newAluno = JSON.parse(
        `{
            "${generateID()}":{
            "nome": "${nome}",
            "idade": "${idade}",
            "notas": "${notas}"
        }}`
    )
    Alunos = Object.assign(Alunos, newAluno); //armazenando a nova instancia -> novo objeto criado
}
function generateID(){
    id = []
    for(let c = 1; c<= 6; c++){
    id.push(parseInt(Math.floor(Math.random() * 9)));
    }
    return id.join('')
}
function getNotas(){
    let notas = new Array(4);
    for(let c = 0; c < 4; c++){
        notas[c] = Number(input(`Digite a nota ${c+1}: `))
    }
    return notas;
}
let Alunos = {

}

let nome = input('Digite seu nome: ');
let idade = input('Digite sua idade: ')
let notas = getNotas();
addAluno(nome, idade, notas);
console.log(Alunos)
