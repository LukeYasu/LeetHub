function distributeCandies(candyType: number[]): number {
    const set = new Set(candyType);
    if(set.size > candyType.length / 2){
        return Math.floor(candyType.length / 2);
    } else {
        return set.size;
    };
};