A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

function yearDays(year){
  return `${year} has ${
    (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
  } days`
}
