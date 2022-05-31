Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(array){
  var toBeUndefined = array.every(a => typeof a == 'number');
  if(!toBeUndefined){
    return undefined;
  } 
  return array.map(number => number **3).filter(number => number % 2 !== 0).reduce((a,b)=> a+b, 0)
}
