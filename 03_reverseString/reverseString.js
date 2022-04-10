const reverseString = function(string) {
    let result = string.split('');
    let newString = '';
    for(let i = result.length - 1; i >= 0; i--){
        newString += result[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
