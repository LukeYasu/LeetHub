function addDigits(num: number): number {
    let total = 0;
    const strNum = `${num}`
    for(let i = 0; i < strNum.length; i++){
        total += parseInt(strNum[i])
    }
    if(`${total}`.length > 1){
        return addDigits(total)
    }
    return total;
};