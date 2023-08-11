const input = require('synchro-prompt');

function palindromo(word){
    let c = word.length - 1;
    let drow = word;
    for(var i = 0; i < word.length; i++){
        while(c >= 0){
            if(word[i] === drow[c]){ //console.log("Confere - ", word[i], drow[c], c, i); 
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

var palavra = input('Digite uma palavra para sabermos se ela e um palindromo ou nao: ').toLowerCase();
var vetor = palavra.split('');
console.log(palindromo(vetor));
