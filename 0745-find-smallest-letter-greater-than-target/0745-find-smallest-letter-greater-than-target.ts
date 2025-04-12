function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;
    let smallest = '';
    while(left <= right){
        let guess = Math.floor((left + right) / 2)
        let guessLetter = letters[guess]
        if(guessLetter.charCodeAt(0) > target.charCodeAt(0) ){
            smallest = guessLetter;
            right = guess - 1;
        } else if( guessLetter.charCodeAt(0) < target.charCodeAt(0)){
            left = guess + 1;
        } else if(guessLetter.charCodeAt(0) === target.charCodeAt(0)){
            left = guess + 1;
        }
    }
    if(smallest === ''){
        return letters[0];
    }else {
        return smallest;
    }
};