
//Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function(s) {
    let number = 0;
    
    for (let i = 0; i < s.length; i++){
        switch(s[i]){
            case 'I': 
                if (s[i+1] == 'V'){
                    number += 4;
                    i++;
                    break;
                } else if (s[i+1] == 'X') {
                    number += 9;
                    i++;
                    break;
                } else {
                    number += 1; 
                    break;
                }
            case 'V': number += 5; 
                break;
            case 'X': 
                if (s[i+1] == 'L'){
                    number += 40;
                    i++;
                    break;
                } else if (s[i+1] == 'C') {
                    number += 90;
                    i++;
                    break;
                } else { 
                    number += 10; 
                    break;
                }
            case 'L': number += 50; 
                break;
            case 'C': 
                if (s[i+1] == 'D'){
                    number += 400;
                    i++;
                    break;
                } else if (s[i+1] == 'M') {
                    number += 900;
                    i++;
                    break;
                } else {
                    number += 100; 
                    break;
                }
            case 'D': number += 500; 
                break;
            case 'M': number += 1000; 
                break;
        };
    };
    
    return number;
};