function removeDuplicates(nums: number[]): number {
    const newSet = new Set(nums);
    const newArr = Array.from(newSet).sort((a,b)=> a - b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== newArr[i]){
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};