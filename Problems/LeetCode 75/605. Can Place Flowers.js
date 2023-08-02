/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let newPlotsArr = [];
    let totalNewPlots = 0;

    for (let i = 0; i < flowerbed.length; i++){
        if (newPlotsArr[i - 1] != 1 && flowerbed[i - 1] != 1 && flowerbed[i] != 1 && flowerbed[i + 1] != 1 ){
            newPlotsArr.push(1);
            totalNewPlots++;

        } else {
            newPlotsArr.push(0);

        }
    }


    if (totalNewPlots >= n){
        return true
    } else {
        return false
        };
    
};