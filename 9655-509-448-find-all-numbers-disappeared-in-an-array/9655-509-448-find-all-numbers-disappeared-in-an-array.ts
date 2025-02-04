function findDisappearedNumbers(nums: number[]): number[] {
    const set = new Set(nums);
    let result = [];
    for(let i = 1; i < nums.length  + 1; i++){
        if(!set.has(i)){
            result.push(i);
        };
    };
    return result;
};