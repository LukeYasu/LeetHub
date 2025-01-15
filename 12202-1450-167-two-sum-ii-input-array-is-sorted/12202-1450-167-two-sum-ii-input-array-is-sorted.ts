function twoSum(numbers: number[], target: number): number[] {
    let x = 0;
    function iterate(x: number): number[]{
        for(let i = x; i < numbers.length; i++){
            if(numbers[x] + numbers[i] === target && x !== i){
                return [x + 1, i + 1];
            };
        };
        x++;
        return iterate(x);
    };
    return iterate(x);
};