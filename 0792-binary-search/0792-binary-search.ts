function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let midIndex = Math.floor((left + right) / 2)
        if(target === nums[midIndex]){
            return midIndex
        } else if(target > nums[midIndex]){
            left = midIndex + 1;
        } else if(target < nums[midIndex]){
            right = midIndex - 1;
        }
    }
    return -1;
};