
var v = {
    nome: 'leo',
    idade: '20',
    senha: '123'
}
var v1 = {
    nome: 'maria',
    idade: '12',
    senha: '1234'
}
var v2 = {
    nome: 'joao',
    idade: '15',
    senha: '0123',
    notas: {
        b1: [1, 3, 5]
    }
}

var aluno = [v, v1, v2]
console.log(aluno)
let n = 'joao';
let p = 15;
let x = aluno.some((n, i, p)=>{
    m = aluno[i].nome
    s = aluno[i].senha
    console.log(n, m)
    if(n === m){
        if(p === s){
        return true;
        }
    }else{
        i++;
        return false;
    }
    
}
    )
    console.log(x)

aluno.forEach((alunos, i)=>{  
    console.log;  
    console.log(alunos[i], alunos.nome, alunos[i]);
    //console.log(`${i+1}, ${alunos[i].nome}, ${alunos[i].idade}`)

    i++
})

let y = new Array(4, new Array(3))
console.log(y)
