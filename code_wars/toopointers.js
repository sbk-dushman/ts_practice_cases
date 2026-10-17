//10.17.2026
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/2174802029/?envType=study-plan-v2&envId=top-interview-150
var removeDuplicates = function(nums) {
     let slow=1;
    for (let fast = 1; fast < nums.length; fast++) {
        if(nums[fast]!=nums[fast -1]){
            nums[slow] = nums[fast];
            slow++;
        }
    }
     return slow;
};