function reverseWords(s: string): string {
    let splitString = s.split(' ');
    let result = '';
    for(let i = 0; i < splitString.length; i++){
        let curWord = '';
        for(let j = splitString[i].length - 1; j >= 0; j--){
            curWord += splitString[i][j];
        };
        result += ' ' + curWord;
    };
    return result.trim();
};