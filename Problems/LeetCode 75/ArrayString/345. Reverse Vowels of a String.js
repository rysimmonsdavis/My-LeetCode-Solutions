/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let vowelArr = [];

    for(let i = 0; i < s.length; i++){

        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || 
            s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){

            vowelArr.push([i,s[i]])
        }
    }

    let reversedVowelArr = [];

    for(let i = 0; i < vowelArr.length; i++){
        reversedVowelArr.push([ vowelArr[i][0], vowelArr[(vowelArr.length - 1) - i][1] ])
    }


    let reversedArr = [];

    for(let i = 0; i < s.length; i++){
        reversedArr.push(s[i])
    }

    for(let i = 0; i < reversedVowelArr.length; i++){

        reversedArr[reversedVowelArr[i][0]] = reversedVowelArr[i][1];

    }

    let reversedVowelS = "";

    for(let i = 0; i < reversedArr.length; i++){
        reversedVowelS += reversedArr[i]
    }

    return reversedVowelS;
};