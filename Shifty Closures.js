Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

function greet_abe(name){
  var name = 'Abe'
  return `Hello, ${name}!`
}

function greet_ben(name){
  var name = 'Ben'
  return `Hello, ${name}!`
}
