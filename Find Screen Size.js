Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

function findScreenHeight(width, ratio) {
  let conversion = ratio.split(':')
   return `${width}x${(width/conversion[0]) * conversion[1]}`
}
