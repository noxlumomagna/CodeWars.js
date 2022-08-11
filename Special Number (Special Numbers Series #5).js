A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

function specialNumber(n){
  let check = String(n).split('')
  for(let i=0;i<check.length;i++){
    if(check[i]>5){
      return "NOT!!"
    }
  }
  return "Special!!"
}
