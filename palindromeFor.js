const input = require('synchro-prompt');

let palindrome = (word)=>{
    let reverse = word.toReversed();
        if(word.join('') === reverse.join('')){     //console.log(`Review - `, word[i], reverse[i], i);
        }else{  return `Oh! This word is not a palindrome.`;  }
    return `The word ${word.join('')} is a palindrome!`;
}

var value = input("Insert a word: ").toLowerCase();
var arr = value.split('');
console.log(palindrome(arr));
