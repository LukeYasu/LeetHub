function wordPattern(pattern: string, s: string): boolean {
    const wordString = s.split(' ');
    const mapP = new Map();
    const mapS = new Map();
    if(wordString.length !== pattern.length) return false;
    for(let i = 0; i < pattern.length; i++){
        if(mapP.has(pattern[i]) && mapP.get(pattern[i]) !== wordString[i]) return false;
        if(mapS.has(wordString[i]) && mapS.get(wordString[i]) !== pattern[i]) return false;
        mapP.set(pattern[i], wordString[i]);
        mapS.set(wordString[i], pattern[i]);
    };
    return true;
};
