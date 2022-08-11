Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

function logicalCalc(array,operator){
  return array.reduce((a,b) => {
    if (operator === 'AND') return a && b;
    if (operator === 'OR') return a || b;
    if (operator === 'XOR') return a != b;
  });
};
