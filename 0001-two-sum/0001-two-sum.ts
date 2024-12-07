function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        if(nums.includes(target - nums[i])){
            const ans1 = nums.findIndex((num)=> num === target - nums[i])
            if(i !== ans1){
            return [i, ans1]
            }
        }
    }
};