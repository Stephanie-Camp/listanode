const input = require('synchro-prompt');
var users = [];
var name, login, pass;

let passTable = (info) => { //function responsible for encrypting new's passwords
    info = info.toString().split('');
    //encrypt array, with table of letters/number and yours 'codes'
    let crypTable = [['a', 'Hjip'], ['b', 'mwXi'], ['c', 'zhpQ'], ['d', 'qSom'], ['e', 'jsDt'], ['f', 'aErn'],
    ['g', 'nulY'], ['h', 'sBek'], ['i', 'vaIt'], ['j', 'bchM'], ['k', 'gOvt'], ['l', 'RUrd'],
    ['m', 'Kosg'], ['n', 'ixyE'], ['o', 'xPaq'], ['p', 'hLWx'], ['q', 'jhGy'], ['r', 'xdcA'],
    ['s', 'sDen'], ['t', 'Uybg'], ['u', 'hyCk'], ['v', 'fdgR'], ['w', 'SDfi'], ['x', 'njDw'],
    ['y', 'cbhZ'], ['z', 'rPls'], ['A', 'pIHjqz'], ['B', 'mMNeOv'], ['C', 'fSomMx'], ['D', 'EjzGtp'],
    ['E', 'jKAMpt'], ['F', 'anpADJ'], ['G', 'YvaczY'], ['H', 'sSBeak'], ['I', 'aIzHAt'],
    ['J', 'bMArew'], ['K', 'gOPWvt'], ['L', 'RDNMqd'], ['M', 'yOAMGg'], ['N', 'zqopPE'],
    ['O', 'xDowIq'], ['P', 'hEvXox'], ['Q', 'jJbcGy'], ['R', 'xLaqmZ'], ['S', 'ynKPQn'],
    ['T', 'UyBAmo'], ['U', 'hKJHwl'], ['V', 'fXytrR'], ['W', 'SJNnya'], ['X', 'VHGFow'],
    ['Y', 'AMJywZ'], ['Z', 'PjOWNs'], ['0', 'fnQq9'], ['1', 'v4eju'], ['2', '8wSFE'], ['3', 'qnJ2w'],
    ['4', 'f0avF'], ['5', '7dhGN'], ['6', 'BH4Ui'], ['7', 'KAD2j'], ['8', 'dSK3'], ['9', 'PG5cf']];
    crypTable.forEach(valueCode => {
       valueCode.forEach(letter => {
          for (var c = 0; c < info.length; c++) {
             if (letter[0] === info[c]) {
                info.splice(info.indexOf(info[c]), 1, valueCode[1]); //replace value in the pass(INFO)
             }
          }
       })
    })
    return info.join(''); //return pass encrypted
 }
 let validLogin = (userName, userSystem) => { //validation of username login
    userName = userName.toLowerCase(); //prevent case-sensitive issues
    let x = userSystem.some(function(user){ //found a correspondent value, loop like forEach
        let index = user.indexOf(userName);
        if(index != -1){ //function return a true value if find a correspondent value 
            return true;    
        }else{ //false case value doesnt exist
            return false;   
        }
    })
    return x;
 }
 let validPass = (passValidate, userSystem) => { //validPass of the password
    passValidate = passTable(passValidate); //convert the value for comp
    let x = userSystem.some(function(user){
        if(passValidate === user[1]){ //if(current password === password in the system)
            return true;
        }else{ //if(current password != password registered)
        return false;
        }
    })
    return x;
 }

while(op != 0){
    var op = Number(input(`
 ---REGRISTRATION SYSTEM---
  ------------------------            ----------------------------------  
 | 1 - NEW REGISTER       |          |  WELCOME! CHOOSE A OPTION BESIDE |
 | 2 - LOGIN              |          |      OR INSERT  0  FOR EXIT.     |
 | 0 - EXIT.              |           ----------------------------------
  ------------------------
 Insert your option: `));

    switch(op){
        case 1: 
            name = input('\nInsert your name, please: ');
            age = Number(input('Age: '));
            login = input('Choose a username for your login: ').toLowerCase();
            pass = passTable(input('Create a password: '));
            let userArr = [login, pass, [name, age]];
            users.push(userArr);
            console.log('NEW REGISTRATION COMPLETED!!');
            break;
        case 2:
            login = validLogin((input('\nUsername: ')), users); //read a value and search he in the array
            if(login === true){ //the user insert a correct login
                let passNow = validPass((input('Password: ')), users); //read the pass and make the validation
                if(passNow === true){ //the user insert a correct password
                    console.log('Login validate. \n................Welcome!'); //suscefully login
                }else{  console.log('Wrong password! Try again.');  } //when the password is invalid
            }else{  console.log('Login not found!');  } //when the user is invalid         
            break;
        case 0: console.log('\nYou left. . . . . . . . . . . . . . . . . . . .');
            break;
        default: console.log('Invalid option. Try again!');
    }

}