Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

productArray=numbers=>numbers.map(e=>numbers.reduce((a,b)=>a*b)/e);

function productArray(numbers){
  return numbers.map(e=>numbers.reduce((a,b)=>a*b)/e);
}
