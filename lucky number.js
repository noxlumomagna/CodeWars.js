Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

function isLucky(n) {
  return String(n).split('').reduce((a,b)=>a+b,0) % 9 === 0
}


or

function isLucky(n){
  return n % 9 === 0
}

or

isLucky=n=>n%9===0
