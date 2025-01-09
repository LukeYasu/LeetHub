function mergeAlternately(word1: string, word2: string): string {
    let mergedString = '';
    const longerWord = word1.length > word2.length ? word1 : word2;
    for(let i = 0; i < longerWord.length; i++){
      mergedString += word1[i] ?? ''
      mergedString += word2[i] ?? ''
    };
    console.log(mergedString);
    return mergedString;
};