/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let sArr = [];
    let currWord = ""

    for(let i = 0; i < s.length; i++){

        if(s[i] != " "){
            currWord += s[i];
            if(s[i + 1] == " " || s[i + 1] == undefined){
                sArr.push(currWord);
            }
        } else {
            currWord = "";
        }
    }

    reversedWordStr = "";

    for(let i = sArr.length - 1; i > 0; i--){
        reversedWordStr += sArr[i] + " "
    }

    return reversedWordStr += sArr[0];
    
};