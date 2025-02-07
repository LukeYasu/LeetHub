function findMaxConsecutiveOnes(nums: number[]): number {
    let counter = 0;
    nums.push(0);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums[i] = counter;
            counter = 0;
        } else {
            counter += 1;
        }
    };
    return Math.max(...nums)
};