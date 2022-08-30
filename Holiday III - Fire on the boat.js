You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

function fireFight(s){
  return s.split(' ').map(e=> e === 'Fire' ? '~~' : e).join(' ')
}

or

fireFight=s=>s.split(' ').map(e=> e === 'Fire' ? '~~' : e).join(' ')
