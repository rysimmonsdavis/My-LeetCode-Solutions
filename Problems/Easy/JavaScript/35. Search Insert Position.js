/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let insertIndex = -1;
    let realIndex = -1;
    
    if (target <= nums[0]){

        return 0;

    }else if (target > nums[nums.length - 1]){

        return nums.length;

    }else {
    
        for (let i = 0; i < nums.length; i++){

            if (target > nums[i - 1] && target <= nums[i]){
                return i;
            }

        }
    }
};