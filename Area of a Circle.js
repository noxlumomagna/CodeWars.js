Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

function circleArea(radius) {
  let area = +((Math.PI*radius**2).toFixed(2))
  return radius > 0 ? area : false
};
