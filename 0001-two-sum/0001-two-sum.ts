function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        const ans2 = target - nums[i]
        if(nums.includes(ans2)){
            const ans1 = nums.findIndex((num)=> num === ans2)
            if(i !== ans1){
            return [i, ans1]
            }
        }
    }
};