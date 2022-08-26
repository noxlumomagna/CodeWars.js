The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:
to throw an error (some examples for such a case):

function newAvg(arr, newavg) {
  let nextDonation = newavg * (arr.length+1) - (arr.reduce((a,b)=>a+b,0))
  if(nextDonation <= 0) throw 'Expected New Average is too low'
  return Math.ceil(nextDonation)
}
