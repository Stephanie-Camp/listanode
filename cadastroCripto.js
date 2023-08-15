const input = require('synchro-prompt');
var users = [];
var name, login, pass;

let passTable = (info) => { //function responsible for encrypting new's passwords
    info = info.toString().split('');
    //encrypt array, with table of letters/number and yours 'codes'
    let crypTable = [[['a'], ['Hjip']], [['b'], ['mwXi']], [['c'], ['zhpQ']], [['d'], ['qSom']], [['e'], ['jsDt']], [['f'], ['aErn']],
    [['g'], ['nulY']], [['h'], ['sBek']], [['i'], ['vaIt']], [['j'], ['bchM']], [['k'], ['gOvt']], [['l'], ['RUrd']],
    [['m'], ['Kosg']], [['n'], ['ixyE']], [['o'], ['xPaq']], [['p'], ['hLWx']], [['q'], ['jhGy']], [['r'], ['xdcA']],
    [['s'], ['sDen']], [['t'], ['Uybg']], [['u'], ['hyCk']], [['v'], ['fdgR']], [['w'], ['SDfi']], [['x'], ['njDw']],
    [['y'], ['cbhZ']], [['z'], ['rPls']], [['0'], ['fnQq9']], [['1'], ['v4eju']], [['2'], ['8wSFE']], [['3'], ['qnJ2w']],
    [['4'], ['f0avF']], [['5'], ['7dhGN']], [['6'], ['BH4Ui']], [['7'], ['KAD2j']], [['8'], ['dSK3']], [['9'], ['PG5cf']]];
    crypTable.forEach(valueCode => { //console.log(valueCode[0], valueCode[1]) - letra correspondende, codigo correspondente
       valueCode.forEach(letter => {  //console.log(letter[0])
          for (var c = 0; c < info.length; c++) {
             if (letter[0] === info[c]) {//if(crypTable[value] = pass[value])
                info.splice(info.indexOf(info[c]), 1, valueCode[1]); //replace value in the pass(INFO)
             }
          }
       })
    })
    return info.join(''); //return pass encrypted
 }
 
 let validation = (passValidate) => { //validation of the password
    passValidate = passValidate.split('').join('');
    console.log('Current pass anda pass registred', passTable(passValidate) , passTable(pass))
    if(passTable(passValidate) === passTable(pass)){ //if(current password === password registered)
       return'login validado';
    }else{ //if(current password != password registered)
       return'senha errada';
    }
 }

while(op != 0){
    var op = Number(input(`
----SISTEMA DE LOGIN E CADASTRO----
  ------------------------------            --------------------------------------  
 | 1 - INICIAR NOVO CADASTRO    |          | Seja bem vindo(a)! Escolha uma opcao |
 | 2 - LOGAR NO SISTEMA         |          |       ou aperte  3  para sair!       |
 | 0 - SAIR.                    |           --------------------------------------
  ------------------------------
 Digite uma opcao: `));

    switch(op){
        case 1: 
            name = input('Digite seu nome, por favor: ');
            age = Number(input('Informe sua idade sua idade: '));
            login = input('Digite um nome de usuario para que voce possa logar: ').toLowerCase();
            pass = input('Crie uma senha: ');
            var userArr = [login, passTable(pass), [name, age]];
            users.push(userArr);
            console.log('CADASTRO REALIZADO COM SUCESSO!');
            console.log(`Users:`, users, `\nUser: `, userArr);
            break;
        case 2:
            login = input('\nUsuario: ').toLowerCase();
            users.forEach(user =>{
                console.log(user[0], user[1])
                if(login === user[0]){
                    pass = input('Senha: ');
                    console.log(validation(pass)); //return a message of aprovation  or  error
                }
            })
        case 0:
            console.log('\nPrograma encerrado com sucesso! \nVoce saiu.');
            break;
        default:
            console.log('\nOpcao nao encontrada. Tente novamente!');
    }

}