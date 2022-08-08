Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  let result = true;
  username.length > 3 && username.length < 17 ? result : result = false;
  username.split('').forEach(e => {
    (e.charCodeAt() > 47 && e.charCodeAt() < 59) ||
     e === '_' ||
    (e.charCodeAt() > 96 && e.charCodeAt() < 123) ? result : result = false;
  });
  return result;
}
