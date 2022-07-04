A Tidy number is a number whose digits are in non-decreasing order.
Given a number, Find if it is Tidy or not .

function tidyNumber(n){
  let tidy=n.toString().split('')
  for(let i=0;i<tidy.length-1;i++){
  if (tidy[i]<=tidy[i+1]){
    continue
  } else { 
    return false
     } 
  }
  return true
}
