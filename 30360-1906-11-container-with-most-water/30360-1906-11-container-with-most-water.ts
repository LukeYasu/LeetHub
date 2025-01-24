function maxArea(height: number[]): number {
    let start = 0;
    let right = height.length - 1;
    let maxVolume = 0;
    while(start !== right){
        let shorterHeight = Math.min(height[start], height[right]);
        maxVolume = Math.max(maxVolume, shorterHeight * (right - start));
        if(height[start] < height[right]){
            start++;
        } else {
            right--;
        }
    }
    return maxVolume;
};