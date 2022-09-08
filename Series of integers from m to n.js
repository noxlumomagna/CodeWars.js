Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

function generateIntegers(m, n) {
  let array = []
  for(let i=m;i<=n;i++){
    array.push(i)
  }
  return array
}
