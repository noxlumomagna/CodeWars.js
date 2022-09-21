Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

function findAll(array,n){
  return array.reduce((prev, curr, i) => (curr === n ? [...prev, i] : prev), []);
}
