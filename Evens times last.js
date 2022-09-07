Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

function evenLast(numbers) {
  let lastIndex = numbers.slice(-1)
  return numbers.reduce((a,b,i)=>i%2===0? a+b*lastIndex:a,0)
}
