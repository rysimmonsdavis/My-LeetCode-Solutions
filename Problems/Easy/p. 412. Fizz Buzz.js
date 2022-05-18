/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let fizzBuzzArr = [];
    
    for (let i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            fizzBuzzArr.push("FizzBuzz");
        } else if (i % 3 == 0) {
            fizzBuzzArr.push("Fizz");
        } else if (i % 5 == 0){
            fizzBuzzArr.push("Buzz");
        } else {
            fizzBuzzArr.push( `${i}` );
        };
    };
    return fizzBuzzArr;
};

console.log(fizzBuzz(15))