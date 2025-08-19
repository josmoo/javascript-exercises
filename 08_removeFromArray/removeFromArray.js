const removeFromArray = function(arr, ...targets) {
    targets.map(target => removeElement(arr, target, 0));
    return arr;
};

const removeElement = function(arr, target, i){
    let index = arr.indexOf(target, i);
    if(index !== -1){
        arr.splice(index, 1)
        removeElement(arr, target, index)
    };
}

// Do not edit below this line
module.exports = removeFromArray;
