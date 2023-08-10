const input = require('synchro-prompt');

function palindrome(word){
    let reverse = word.toReversed();
    for(var i = 0; i < word.length; i++){
        if(word[i] === reverse[i]){     //console.log(`Review - `, word[i], reverse[i], i);
        }else{  return `Oh! This word is not a palindrome.`;  break;  }
    }
    return `The word ${word.join('')} is a palindrome!`;
}

var value = input("Insert a word: ").toLowerCase();
var arr = value.split('');
console.log(palindrome(arr));
