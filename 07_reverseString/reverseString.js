const reverseString = function(word) {
    const wordLength = word.length;
    var stack = [];
    var reversedWord = "";
    for(index = 0; index < wordLength; index++){
        console.log(index + word[index]);
        stack.push(word[index]);
    }
    for(index = wordLength - 1; index >= 0; index--){
        reversedWord += stack.pop[index];
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
