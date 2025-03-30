function romanToInt(s: string): number {
  let sum = 0;
  let prevVal = 0;
  const romVal: {[key: string]: number} = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  for(let i = 0; i < s.length; i++){
    const currentVal = romVal[s[i]];
  if(currentVal > prevVal){
    sum += currentVal - 2 * prevVal;
  } else {
    sum += currentVal;
  }
    prevVal = currentVal;
  }
  return sum;
};