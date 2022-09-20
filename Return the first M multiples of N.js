Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

function multiples(m, n){
  return Array(m).fill(m).map((e,i)=>[i+1]*n)
}

multiples=(m,n)=>Array(m).fill(m).map((e,i)=>[i+1]*n)
