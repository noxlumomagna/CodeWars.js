Your task is to write function factorial.

function factorial(n){
  if (n === 1 || n === 0){
    return 1;
  } for (var i = n - 1; i >= 1; i--){
    n *= i
  }
  return n
}
