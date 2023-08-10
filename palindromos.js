const input = require('synchro-prompt');

function palindromo(pali){
    let c = pali.length - 1;
    let v2 = pali;
    for(var i = 0; i < pali.length; i++){
        while(c >= 0){
            if(pali[i] === v2[c]){     //console.log("Confere - ", v[i], v2[c], c, i); 
            }else{
                c = -1;
                return "Essa palavra nao e um palindromo!";
            }       
            c--;
            break;
        }
    }
    return "Essa palavra e um palindromo!";
}

var word = input('Digite uma palavra para sabermos se ela e um palindromo ou nao: ').toLowerCase();
var v = word.split('');
console.log(palindromo(v));
