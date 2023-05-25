/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++){

        if (haystack.charAt(i) == needle.charAt(0)){

            let found = true;

            for (let j = 0; j < needle.length && found == true; j++){

                if (needle.charAt(j) != haystack.charAt(i + j)){

                    found = false;
                }
            }

            if (found == true){

                return i;
            }
        }
    }

    return -1;
};