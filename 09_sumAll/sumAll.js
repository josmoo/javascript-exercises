const sumAll = function(begin, end) {
    if(!begin.isInteger() || begin < 0 || !end.isInteger || end < 0){
        return "ERROR";
    }
    let sum = 0;
    for(begin; begin <= end; begin++){
        sum+=begin;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
