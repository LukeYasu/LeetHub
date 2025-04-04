function missingNumber(nums: number[]): number {
    const sorted = nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length + 1; i++){
        if(sorted[i] !== i){
            return i;
        }
    }
    return 0;
};