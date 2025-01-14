function isPalindrome(s: string): boolean {
    const formattedString = s.toLocaleLowerCase().match(/[a-zA-Z0-9]/g);
    if(!formattedString) return true;
    if(formattedString.length === 1) return true;
    for(let i = 0; i < Math.floor(formattedString.length / 2); i++){
      if(formattedString && formattedString[i] !== formattedString[formattedString.length - 1 - i]){
        return false;
      };
    };
    return true;
};