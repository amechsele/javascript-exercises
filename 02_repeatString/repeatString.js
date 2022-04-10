let toRepeat = '';
const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }

    for (let i = 0; i < num; i++){
        toRepeat += string;
    }
    return toRepeat;
};
// Do not edit below this line
module.exports = repeatString;
