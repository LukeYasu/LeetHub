function uniqueMorseRepresentations(words: string[]): number {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let set = new Set();
    for(let i = 0; i < words.length; i++){
        let currentWord = '';
        for(let x = 0; x < words[i].length; x++){
            currentWord = currentWord + morse[words[i][x].charCodeAt(0) - 97];
        };
        set.add(currentWord);
    };
    return set.size;
};