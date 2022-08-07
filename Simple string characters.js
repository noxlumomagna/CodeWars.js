n this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

function solve(s){
  let charArray = [0,0,0,0]
  for(let i=0;i<s.length;i++){
    if(s[i].toLowerCase()>s[i]){
      charArray[0]++
    } else if(s[i].toUpperCase()<s[i]){
      charArray[1]++
    } else if(s[i]>=0&&s[i]<10){
      charArray[2]++
    } else {
      charArray[3]++
    }
  }
  return charArray
}


or

function solve(s){
  let charArray = [0, 0, 0, 0];
  for (let i=0;i< s.length;i++){
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) charArray[0]++;
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) charArray[1]++;
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) charArray[2]++;
    if (s.charCodeAt(i) >= 33 && s.charCodeAt(i) <= 47) charArray[3]++;
    if (s.charCodeAt(i) >= 58 && s.charCodeAt(i) <= 64) charArray[3]++;
  }
  return charArray;
}
