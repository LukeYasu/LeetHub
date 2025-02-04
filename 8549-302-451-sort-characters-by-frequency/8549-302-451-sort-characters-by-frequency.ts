function frequencySort(s: string): string {
    const newMap = new Map();
    let result = '';
    for(let i = 0; i < s.length; i++){
        if(newMap.get(s[i])){
            newMap.set(s[i], newMap.get(s[i]) + 1);
        } else {
            newMap.set(s[i], 1);
        };
    };
    const array = Array.from(newMap.entries());
    array.sort((a, b)=> b[1] - a[1]);
    for (const [char, freq] of array) {
        result += char.repeat(freq);
    }
    return result;
};