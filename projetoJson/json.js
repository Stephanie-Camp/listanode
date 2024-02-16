//uso do Object.assign()

let newAluno = (user, nome, idade, ingresso) => {
    let newAluno = JSON.parse(
        `{
            "${user}" :{
                "nome": "${nome}",
                "RA": "${id()}",
                "idade": "${idade}",
                "Ano de ingresso": "${ingresso}"
            }
        }`
    );
    Alunos = (Object.assign(Alunos, newAluno))
    Path.push(nome)
}

function id(){
    let id = [];
    for(c = 0; c < 9; c++){
     id.push(parseInt(Math.random() * 9));
    }
    return id.join('');
}

let Alunos = []
let Path = [];

let nome = 'Maria';
let idade = 17;
let ingresso = '2017';
let user = 'ma22';
newAluno(user, nome, idade, ingresso);
console.log(Path, Alunos);