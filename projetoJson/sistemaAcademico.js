const input = require('synchro-prompt');
var senha, nome, c, alunoNota, notaBim, novaNota;
var alunos = [];
var professores = [];
//teste
var professor1 = {
    nome: 'Jorge',
    senha: '123456',
    materia: 'literatura',
    info: {
        idade: '29',
        cpf: '98765t4321',
    }
}
professores.push(professor1);
console.log(professores.nome);
//function backNext(opcao){  return opcao;  }
var aluno1 = {
    nome: 'Maria',
    sobrenome: 'Martins',
    senha: 'maia1234',
    notas: [[10, 3.7, 4], [7.3, 5, 8.8], [10, 10, 10], [7.5, 8.9, 9.2]],
    info: {
        cpf: '123456789',
        ra: 'js986234567'
    }
}
alunos.push(aluno1);
let validLogin = (nomeDigitado, dadoSistema) => { //validacao de login geral
    let valid = dadoSistema.some((n, i) => { //some() encontra o primeiro valor compativel e retorna um booleano
        n = nomeDigitado; //nome digitado na hora de tentativa de login
        let nomeSistema = dadoSistema[i].nome; //console.log(n, nomeSistema); 
        if (n === nomeSistema) { return true; } else { i++; return false; } //compara nome digitado com nomes armazenado no sistema
    })
    return valid;
}
let validPass = (senhaDigitada, dadoSistema) => { //validacao de senha geral
    let valid = dadoSistema.some((p, i) => {
        p = senhaDigitada; //senha digitada na hora de tentativa de login
        let senhaSistema = dadoSistema[i].senha;
        if (p === senhaSistema) { return true; } else { i++; return false; } //compara senha digitada com senha armazenada no sistema
    })
    return valid;
}

let perfil = (perfil, dado, i) => { //console.log(perfil(op, professores/alunos, c))
    if(perfil === 'A'){
        perfil = `
    |PERFIL|
-----------------
${dado[i].nome}
${dado[i].idade}
${(dado[i].info).ra}
`
        return perfil;
    }else if(perfil === `P`){
        perfil = `
    |PERFIL|
-----------------
${dado[i].nome}
${dado[i].idade}
${(dado[i].info).cpf}
`
        return perfil;
    }
}
let mostraNota = (i, aluno) => { //mostra as notas dos alunos e retorna a media
    let media = 0;
        aluno[i].forEach((nota, i) => {
            console.log(`Nota ${i + 1}:`, nota);
            media = Number(media) + Number(nota);
            i++;
    })
    return `Media = ${media}`; //media a calcular
}
let editeNota = (i, aluno, notaSubst) => { //edita a nota do aluno se o professor quiser
    notaSubst = notaSubst - 1;
    let notaDigitada = Number(input('Informe a nova nota: '));
    aluno[i][notaSubst] = notaDigitada; //substituiçao da nota anterior pela nova

}

while (op != 'F') { //base do sistema -> encerramento do programa
    var op = input(` SISTEMA INTEGRADO DE GESTAO ACADEMICA
  |A - ESTUDANTE.
  |P - GESTOR.
  |F - ENCERRAR.
 
   Logar como : `).toUpperCase(); //upperCase para evitar erros de digitacao (case Sensitive)
    switch (op) {
        case 'P': //modulo do professor
            do {
                var x = Number(input(`
.OPERACOES:   |1 - CADASTRAR PROFESSOR
              |2 - LOGAR NO SISTEMA
              |3 - VOLTAR AO MENU PRINCIPAL
 Informe uma opcao: `)); //quadro de opcoes do menu do professor
                switch (x) {
                    case 1: //caso o professor deseja realizar um cadastro
                        let professor = {
                            nome: input('Informe seu nome: '),
                            senha: input('Informe sua senha: '),
                            materia: input('Area responsavel: '),
                            info: {
                                idade: Number(new Date().getFullYear()) - Number(input('Informe o ano de nascimento:')),
                                cpf: Number(input('Digite o seu cpf por favor: ')),
                            }
                        }
                        professores.push(professor); //professores cadastrados armazenados em vetor
                        console.log('CADASTRO REALIZADO! \n', professores, professor); //visualizacao
                        break;
                    case 2: //validacao de login
                        nome = validLogin((input('Login: ')), professores); //nome digitado pelo professor na hora do login e vetor dos professores
                        senha = validPass((input('Senha: ')), professores); //senha digitada pelo professor na hora do login e vetor dos professores
                        if (nome === true && senha === true) { //verificacao da validacao enviada para as funcoes-> resultado esperado para logar
                            do { //modulo de opcoes do login
                                var opc = Number(input(`          _________
------------MODULOS --------------                              PERFIL
|  1 - Ver lista de professores. |
|  2 - Ver lista de alunos       |
|  3 - Deslogar do sistema       |
 --------------------------------
 Opcao: `))
                                if (opc === 1) { //lista de professores sendo mostrada
                                    console.log('LISTA DE PROFESSORES:');
                                    professores.forEach((prof, i) => {
                                        console.log(i + 1, ' - ', prof.nome, ' -> ', prof.materia);
                                        i++
                                    })
                                } else if (opc === 2) { //lista de alunos
                                    console.log('LISTA DE ALUNOS:');
                                    alunos.forEach((aluno, i) => {
                                        console.log(i + 1, ' - ', aluno.nome);
                                        i++;
                                    })
                                    var alunoVer = Number(input('ESCOLHA UM ALUNO PARA ANALISE: ')) - 1
                                    for (c = 0; c <= alunos.length; c++) {
                                        alunosLista = alunos.indexOf(alunos[c])
                                        if (alunoVer === alunosLista) {
                                            while (novaNota != 4) {
                                                notaBim = Number(input(`
-----BOLETIM-----
|1 - 1º BIMESTRE|        -----------------------------------
|2 - 2º BIMESTRE|       |ESCOLHA UM BIMESTRE PARA VISUALIZAR|
|3 - 3º BIMESTRE|       | OU INSIRA  4  PARA VOLTAR AO MENU |
|4 - 4º BIMESTRE|        -----------------------------------
 --------------- 
 INSIRA UM BIMESTRE PARA VISUALIZAR: `));
                                                alunoNota = alunos[c].notas
                                                notaBim = notaBim - 1;
                                                switch (notaBim) {
                                                    case 0:
                                                        console.log(mostraNota(notaBim, alunoNota))
                                                        novaNota = Number(input(`Digite a nota que deseja editar: `));
                                                        if (novaNota >= 0 && novaNota < 4) { editeNota(notaBim, alunoNota, novaNota); }
                                                        break;
                                                    case 1:
                                                        console.log(mostraNota(notaBim, alunoNota))
                                                        novaNota = Number(input(`Digite a nota que deseja editar: `));
                                                        if (novaNota >= 0 && novaNota < 4) { editeNota(notaBim, alunoNota, novaNota); }
                                                        break;
                                                    case 2:
                                                        console.log(mostraNota(notaBim, alunoNota))
                                                        novaNota = Number(input(`Digite a nota que deseja editar: `));
                                                        if (novaNota >= 0 && novaNota < 4) { editeNota(notaBim, alunoNota, novaNota); }
                                                        break;
                                                    case 3:
                                                        console.log(mostraNota(notaBim, alunoNota))
                                                        novaNota = Number(input(`Digite a nota que deseja editar: `));
                                                        if (novaNota >= 0 && novaNota < 4) { editeNota(notaBim, alunoNota, novaNota); }
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                } else if (opc > 3 || opc < 1) { console.log('Opcao invalida!'); }
                            } while (opc != 3); //do while 3 - listas
                        }
                }
            } while (x != 3); //
            break;
        case 'A': //modulo do aluno
            while (x != 3) {
                var x = Number(input(`
.OPERACOES  |1 - CADASTRAR ALUNO(A)
            |2 - LOGAR NO SISTEMA
            |3 - VOLTAR AO MENU PRINCIPAL
Informe uma opcao: `));
                switch (x) {
                    case 1: //cadastro de aluno no sistema
                        let aluno = {
                            nome: input('Primeiro nome do aluno: '),
                            sobrenome: input('Sobrenome do aluno: '),
                            senha: input('Crie uma senha: '),
                            notas: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
                            info: {
                                idade: Number(new Date().getFullYear()) - Number(input('Ano de nascimento do aluno:')),
                                RA: input('Numero da matricula: '),
                            }
                        }
                        alunos.push(aluno); //armazenamento de alunos no vetor/sistema
                        console.log('CADASTRO REALIZADO! \n', alunos, aluno); //visualizacao
                        break;
                    case 2: //validacao do login do aluno
                        nome = validLogin((input('Usuario: ')), alunos);
                        senha = validPass((input('Senha: ')), alunos);
                        console.log(senha, nome)
                        if (nome === true && senha === true) {//console.log(nome, senha) = (true, true)
                            do {
                                var opc = Number(input(`
.       |1 - VER SUAS NOTAS
        |2 - DESLOGAR DO SISTEMA
 Selecione uma operaçao: `));
                                if (opc === 1) {
                                        notaBim = Number(input(`VISUALIZAR NOTAS:
1 - 1º BIMESTRE
2 - 2º BIMESTRE
3 - 3º BIMESTRE
4 - 4º BIMESTRE
Escolha um bimestre: `));
                                        notaBim = notaBim - 1;
                                        for (c = 0; c < alunos.length; c++) {
                                            alunoNota = alunos[c].notas
                                            switch (notaBim) {
                                                case 0:
                                                    console.log(mostraNota(notaBim, alunoNota));
                                                    break;
                                                case 1:
                                                    console.log(mostraNota(notaBim, alunoNota));
                                                    break;
                                                case 2:
                                                    console.log(mostraNota(notaBim, alunoNota));
                                                    break;
                                                case 3:
                                                    console.log(mostraNota(notaBim, alunoNota));
                                                    break;
                                            }
                                        }
                                    }
                            } while (opc != 2)
                        }
                        break;
                }
            }
            break;
        case 'F': console.log('Voce esta saindo do programa.');
            break;
        default: console.log('Opcao invalida! \nTente novamente.');
    }

}
