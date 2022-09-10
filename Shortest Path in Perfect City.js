Given user's departure and destination coordinates, each of them located on some street, find the length of the shortest route between them assuming that cars can only move along the streets. Each street can be represented as a straight line defined by the x = n or y = n formula, where n is an integer.

function perfectCity(dep, des){
  let hypX = Math.round((dep[0]+des[0])/2);
  let hypY = Math.round((dep[1]+des[1])/2);
  let result = Math.abs(dep[0]-hypX) + Math.abs(dep[1]-hypY) + Math.abs(des[0]-hypX) + Math.abs(des[1]-hypY)
  return result.toFixed(1).toString();
} 
