function findWords(words: string[]): string[] {
    let result: string[] = [];
    for(let i = 0; i < words.length; i++){
        if(/^[qwertyuiop]*$/i.test(words[i]) || /^[asdfghjkl]*$/i.test(words[i]) || /^[zxcvbnm]*$/i.test(words[i])){
            result.push(words[i]);
        };
    };
    return result;
};