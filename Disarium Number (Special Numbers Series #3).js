Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Given a number, Find if it is Disarium or not .

function disariumNumber(n){
  return n.toString().split('').map((e,i)=>e**(i+1)).reduce((a,b)=>a+b,0) === n ? "Disarium !!" : "Not !!"
}

or

disariumNumber=n=>n.toString().split('').map((e,i)=>e**(i+1)).reduce((a,b)=>a+b,0) === n ? "Disarium !!" : "Not !!"
