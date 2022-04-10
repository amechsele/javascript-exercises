const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
 }  

 if ((typeof(num1) != 'number') || (typeof(num2) != 'number')) {
        return 'ERROR';
 } 
    
 let first;
 let second;
     let sum = 0;
        

    if (num1 < num2){
            first = num1;
            second = num2;
    }   else {
            first = num2;
            second = num1;
    }

    for ( let i = first; i <= second; i++ ){
  sum+=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
