Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

function reverse(n){
  let reversed = 0;
  while(n>0){
    let lastDigit = n % 10
    reversed = (reversed*10)+lastDigit
    n = Math.floor(n/10)
  }
  return reversed
}
