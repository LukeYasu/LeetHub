function isHappy(n: number): boolean {
    let total = 0;
    const seenNums = new Set();
    function squareDigits(num: number): number {
        total = 0;
        for(let i = 0; i < num.toString().length; i++){
            const digit =Number(num.toString()[i])
            total += digit * digit
        }
        if(seenNums.has(total)){
            return 0;
        } else if(total === 1) {
            return 1;
        } else {
            seenNums.add(total)
            return squareDigits(total)
        }
    }
    return squareDigits(n) === 1 ? true : false
};