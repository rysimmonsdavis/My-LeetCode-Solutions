/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    let str1DivisorsArr = divisors(str1.length); //generate array of divisors of str1 length
    let str2DivisorsArr = divisors(str2.length); //generate array of divisors of str2 length

    let commonDivisorsArr = commonElements(str1DivisorsArr,str2DivisorsArr); //find common divisors of divisors of str1 and str2 lengths

    for(let i = (commonDivisorsArr.length - 1); i >= 0; i--){
        let strChunk = str1.substring(0,commonDivisorsArr[i]);
        let matches = true;

        function compareChunks(str){
            for(let j = 0; j < str.length && matches == true; j += commonDivisorsArr[i]){

                let strChunkToCompare = str.substring(j, j + commonDivisorsArr[i]);

                for(let k = 0; k < strChunk.length && matches == true; k++){
                    if(strChunk[k] != strChunkToCompare[k]){
                        matches = false;
                    }
                }
            }
        };

        compareChunks(str1);
        compareChunks(str2);

        if(matches == true){
            return strChunk;
        } else {
            return "";
        }
    }
};

//output array of divisors of input number
var divisors = function(num) {

    let divisorArr = [];

    for(let i = 1; i <= num / 2; i++){ //loop to test each possible divisor
        if(num % i == 0){
            divisorArr.push(i)
        }
    }

    divisorArr.push(num);

    return divisorArr;
};

//output array of common elements of two sorted, ascending, input arrays
var commonElements = function(arr1,arr2){

    if(arr1[arr1.length - 1] < arr2[arr2.length - 1]){
        smallerMaxElem = arr1[arr1.length - 1]
    } else {
        smallerMaxElem = arr2[arr2.length - 1]
    }

    let commonElemsArr = [];

    for(let i = 0; (i < arr1.length) && (arr1[i] <= smallerMaxElem); i++){ //loop to compare each element of each array
        for(let j = 0; (j < arr2.length) && (arr2[j] <= smallerMaxElem); j++){
            if(arr1[i] == arr2[j]){
                commonElemsArr.push(arr1[i])
            }
        }
    }

    return commonElemsArr
}

