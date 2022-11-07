When a minute is evenly divisible by three, the clock will say the word "Fizz".
When a minute is evenly divisible by five, the clock will say the word "Buzz".
When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".

function fizzBuzzCuckooClock(time) {
  let numberTime = time.split(':').map(e=>parseInt(e))
  let hours = numberTime[0]
  let mins = numberTime[1]
  
  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
  
  if(mins === 0) return ('Cuckoo '.repeat(hours).trim())
  if(mins === 30) return ('Cuckoo')
  if(mins % 15 === 0) return "Fizz Buzz"
  if(mins % 3 === 0) return "Fizz"
  if(mins % 5 === 0) return "Buzz"
  return 'tick'
}
