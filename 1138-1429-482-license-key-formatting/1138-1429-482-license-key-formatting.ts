function licenseKeyFormatting(s: string, k: number): string {
    let key = '';
    let counter = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] !== '-' && counter !== k){
            key = s[i] + key;
            counter += 1;
        } else if (counter === k && s[i] !== '-'){
            key = '-' + key;
            counter = 0;
            i++;
        }
    };
    return key.toLocaleUpperCase();
};