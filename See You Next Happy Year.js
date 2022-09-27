Given a year, Find The next happy year or The closest year You'll see your best friend

function nextHappyYear(year){
  return new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;
}
