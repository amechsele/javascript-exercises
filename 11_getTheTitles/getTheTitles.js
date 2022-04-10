const getTheTitles = function(array) {
    let titles = [];

    for (element of array){
        titles.push(element.title);
    }
    
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
