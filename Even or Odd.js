Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return Math.abs(number) % 2 === 1 ? "Odd" : "Even";
}

even_or_odd=n=>Math.abs(n)%2==1?"Odd":"Even"
