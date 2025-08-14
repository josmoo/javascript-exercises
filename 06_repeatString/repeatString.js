const repeatString = function(strng, num) {
    if (num < 0){
        return "ERROR";
    }
    result = ""
    for (let index = 0; index < num; index++){
        result += strng;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
