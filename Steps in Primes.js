The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1. From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:
So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m, n if these g-steps prime numbers exist otherwise nil or null or None or Nothing or [] or "0, 0" or {0, 0} or 0 0 or "" (depending on the language).

function step(g,m,n){
    for(let i=m; i<= n; i++){
        if(primeNum(i) && primeNum(i+g)){ 
          return [i, i+g]
        }
    }
    return null;
}
function primeNum(n){
  let squareRoot = Math.sqrt(n);
  for(let i = 2; i <= squareRoot; i++) {
    if(n % i === 0) 
      return false; 
  }
  return n !== 1;
}
