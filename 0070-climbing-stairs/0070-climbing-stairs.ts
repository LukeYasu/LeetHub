function climbStairs(n: number): number {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let arr = [0,1,2];
    for(let i = 3; i <= n; i++){
        const num = arr[i - 1] + arr[i - 2];
        arr.push(num);
    };
    return arr[n];
};