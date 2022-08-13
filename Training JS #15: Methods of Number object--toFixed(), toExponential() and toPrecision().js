Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

function howManySmaller(arr,n){
  return arr.filter(e=>e.toFixed(2)<n).length
}
