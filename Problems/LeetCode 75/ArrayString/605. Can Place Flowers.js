/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let totalNewPlots = 0;

    for (let i = 0; i < flowerbed.length; i++){
        if (flowerbed[i - 1] != 1 && flowerbed[i] != 1 && flowerbed[i + 1] != 1 ){
            flowerbed[i] = 1;
            totalNewPlots++;
        }
    }

    if (totalNewPlots >= n){
        return true
    } else {
        return false
        };
    
};