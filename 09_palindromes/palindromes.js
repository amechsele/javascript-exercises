const palindromes = function (word) {
    newWord = '';
    for(let i = 0; i < word.length; i++){
    
        switch(word[i]){
            case '!':
                continue;
            case ',':
                continue;
            case ' ':
                continue;
            case '.':
                continue;
            default:
                newWord += word[i].toLowerCase();
        }
    }

    for (let i = 0, y = newWord.length - 1; i < newWord.length; i++, y--){
        if (newWord[i] != newWord[y]){
            return false;
        }
        if (i === newWord.length - 1){
            return true;
        }

    }
};

// Do not edit below this line
module.exports = palindromes;
