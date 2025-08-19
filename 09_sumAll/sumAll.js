const sumAll = function(begin, end) {
    if(!Number.isInteger(begin) || begin < 0 || !Number.isInteger(end) || end < 0){
        return "ERROR";
    }
    if(end < begin){
        begin = begin ^ end;
        end = begin ^ end;
        begin = begin ^ end;
    }
    let sum = 0;
    for(begin; begin <= end; begin++){
        sum+=begin;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
