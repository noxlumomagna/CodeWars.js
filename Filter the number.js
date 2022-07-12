Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

FilterString=(value)=>+[...value].filter(e=>!isNaN(e)).join('')

// +treats a value as a number 
//   .split so the string is turned into an array 
//   filter out n if n is not a number 
//   and recombine the array into a single string
