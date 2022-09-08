Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

function balancedNum(number){
  let result = 0;
  let stringed = number.toString();
  for(let i=0;i<stringed.length/2-1; i++){
    result+= +stringed[i] - +stringed[stringed.length - 1 - i];    
  }
  return result === 0 ? 'Balanced' : 'Not Balanced';
}
