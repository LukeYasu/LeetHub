function canBeTypedWords(text: string, brokenLetters: string): number {
    const words = text.split(' ');
    let num = words.length;
    const escapedLetters = brokenLetters.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`[${escapedLetters}]`, 'i');
    for(let i = 0; i < words.length; i++){
        if(regex.test(words[i])){
            num--;
        }
    }
    return num;
};