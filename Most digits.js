Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
return array.reduce((a,b)=>(`${b}`.length > `${a}`.length) ? b : a);
}

or

function findLongest(array){
 let arr = 0;
    for(let i=0; i<array.length; i++){
      if(array[i].toString().length > arr.toString().length){
        arr = array[i];
      }
    }
  return arr;
}
