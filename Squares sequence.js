Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x,n){
  let array = [];
  for(let i=0; i<n; i++){
    array.push(x);
    x=x*x;
  }
  return array;
}
