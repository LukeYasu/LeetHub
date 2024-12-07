/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let mergedArr = [];
    let zeroCount = [];
    for(let i = 0; i < m; i++){

            mergedArr.push(nums1[i])
        
    }
    for(let i = 0; i < n; i++){

            mergedArr.push(nums2[i])
        
    }
    mergedArr.sort((a, b) => a - b)
    for(let i = 0; i < mergedArr.length; i++){
        nums1[i] = mergedArr[i]
    }
}
