const removeFromArray = function(array, ...args) {
   for(item of args){
    if(array.includes(item)){
        let pos = array.indexOf(item);
              array.splice(pos, 1);
      }
              
      }
        return array;       

};

// Do not edit below this line
module.exports = removeFromArray;
