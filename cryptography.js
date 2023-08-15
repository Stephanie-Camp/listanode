const input = require('synchro-prompt');

/* -> Recebe senha (sem acesso) -> conversao da senha ocorre antes de chegar no sistema
-> sistema le senha codificada - hash -> compara com a senha armazenada - 'hash'   */
//nova senha -> conversao -> armazenamento(hash) -> senha digitada novamente -> comparacao (hash) -> resposta

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
   console.log('Current pass anda pass registred', passTable(passValidate) , passTable(userPass))
   if(passTable(passValidate) === passTable(userPass)){ //if(current password === password registered)
      return'login validado';
   }else{ //if(current password != password registered)
      return'voce esta preso';
   }
}

var userPass = input(`Digite uma senha: `); //test
//var x = userPass.split('') //error 1 -> inserct in the function passTable
console.log('New pass:', passTable(userPass)); //test password

var pass = input('Digite sua senha: '); //validator of current password
console.log(validation(pass)); //return a message of aprovation  or  error;
