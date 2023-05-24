/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k = 0;
    let tracker = -101;
    let length = nums.length;

    for (let i = 0; i < nums.length; i++){

        if (nums[i] != tracker){
            k++;
            tracker = nums[i];
        } else {
            nums.splice(i,1);
            i -= 1;
            length -= 1;
        }

    }
    
    return k;
};