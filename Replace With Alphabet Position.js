Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

alphabetPosition=text=>text.toLowerCase().split('').map(e=>e.charCodeAt(0)-96).filter(e=>e >= 1 && e <= 26).join(' ')
