Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

function differenceOfSquares(n){
  let sums = 0;
  let squares = 0;
  for(let i=0;i<=n;i++){
    sums = sums + i
    squares = squares + (i**2)
  }
  return sums**2 - squares
}
