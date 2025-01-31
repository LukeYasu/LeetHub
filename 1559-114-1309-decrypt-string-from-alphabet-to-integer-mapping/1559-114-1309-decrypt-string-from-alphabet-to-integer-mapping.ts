function freqAlphabets(s: string): string {
    let result = '';
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === '#'){
            const num = s[i - 2] + s[i - 1];
            result = String.fromCharCode(parseInt(num) + 96) + result;
            i--;
            i--;
        } else {
            result = String.fromCharCode(parseInt(s[i]) + 96) + result;
        }
    };
    return result;
};