function maxArea(height: number[]): number {
    let start = 0;
    let right = height.length - 1;
    let shorterHeight = 0;
    let maxVolume = 0;
    while(start !== right){
        shorterHeight = height[start] < height[right] ? height[start] : height[right];
        maxVolume = shorterHeight * (right - start) > maxVolume ? shorterHeight * (right - start) : maxVolume;
        if(height[start] < height[right]){
            start++;
        } else {
            right--;
        }
    }
    return maxVolume;
};