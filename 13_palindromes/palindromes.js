const palindromes = function (palindrome) {
    const arr = palindrome.match(/[a-z0-9]/ig);
    let l = 0;
    let r = arr.length - 1;

    while(l < r){
        if(arr[l].toLowerCase() !== arr[r].toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
