remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

function remove(string){  
  while (string[string.length-1] ==='!'){
    string = string.slice(0,-1);
  }
  return string
}
