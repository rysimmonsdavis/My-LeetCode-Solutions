/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let minWord = 0;

    let minWordLength = 0;

    if (word1.length <= word2.length){
        minWordLength = word1.length
        minWord = 1;
    } else {
        minWordLength = word2.length
        minWord = 2;
    }

    let word3 = "";

    for (let i = 0; i < minWordLength; i++){
        word3 += word1.charAt(i);
        word3 += word2.charAt(i)
    }

    if (minWord = 1){
        word3 += word2.slice(minWordLength);
    }
    
    if (minWord = 2){
        word3 += word1.slice(minWordLength);
    }

    return word3;
};