const fibonacci = function(n) {
    n = parseInt(n);
    if(n < 0) return "OOPS";
    if(n===0) return 0;
    if(n===1) return 1;
    let prevprev = 0;
    let prev = 1;
    for(let i = 0; i < n - 1; i++){
        let temp = prev;
        prev = prev + prevprev;
        prevprev = temp;
    }
    return prev;
};


// Do not edit below this line
module.exports = fibonacci;
