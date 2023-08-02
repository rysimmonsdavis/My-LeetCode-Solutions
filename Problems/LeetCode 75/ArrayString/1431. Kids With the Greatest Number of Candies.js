/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let mostCandies = 0;
    let result = [];

    for (let i = 0; i < candies.length; i++){
        if (mostCandies < candies[i]){

            mostCandies = candies[i]
        }
    }

    for (let i = 0; i < candies.length; i++){
        if (candies[i] + extraCandies >= mostCandies){
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result;
    
};