Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

function jumpingNumber(n){
  let something = String(n).split('')
  for(let i=0; i < something.length-1; i++){
    if(Math.abs(something[i] - something[i+1]) !== 1 ){
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}
