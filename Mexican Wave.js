In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
return [...str].map((e,i)=>str.slice(0,i)+e.toUpperCase()+str.slice(i+1)).filter(e=>e!=str)
}
