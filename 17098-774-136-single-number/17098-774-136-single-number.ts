function singleNumber(nums: number[]): number {
    let x = 0;
    for(let num of nums){
        x ^= num;
    };
    return x;
};