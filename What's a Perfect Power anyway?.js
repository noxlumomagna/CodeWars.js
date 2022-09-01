Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

function isPP(n){
  for(let i=2; i<=n; i++){
    for(let j=2; Math.pow(i,j)<=n; j++){
      if(Math.pow(i,j)===n) return [i,j]
    }
  }
  return null
}
