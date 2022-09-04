Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

Example
For start = 125, and end = 132

function paintLetterboxes(start,end){
  let boxes = Array(10).fill(0)
  for (let i=start; i<=end; i++){
for(let n of(i+'')){
  boxes[n]++
    }
  }
  return boxes
}

or

function paintLetterboxes(start,end){
  let letterboxes = new Array(10).fill(0)
  for(let i=start;i<=end;i++){
    i.toString().split('').forEach(e=>letterboxes[e]++)
  }
  return letterboxes
}
