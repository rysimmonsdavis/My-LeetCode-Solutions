/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let counterLast = 0;
    let counterCurrent = 0

    for (let i = 0; i < s.length; i++){
        if (s[i] == " "){
            counterCurrent = 0;
        } else {
            counterCurrent++;
            counterLast = counterCurrent;
        }
    }

    return counterLast;
};