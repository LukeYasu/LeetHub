function numJewelsInStones(jewels: string, stones: string): number {
    let total = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewels.includes(stones[i])){
            total++;
        }
    }
    return total
};