Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

function permuteAPalindrome(input){ 
  let map = {}
  let normInput = input.toLowerCase();
  
  for(let i=0; i<normInput.length; i++){
    let permInput = normInput[i];
    
    if(permInput !== " "){
      map[permInput] = map[permInput] ? map[permInput] + 1 : 1;
    }
  }
  
  let oddFreq = false;
  for(let object in map){
    let freq = map[object]
    
    if(freq % 2 !==0){
      if(oddFreq){
        return false;
      } else {
        oddFreq = true;
      }
    }
  }
  return true;
}
