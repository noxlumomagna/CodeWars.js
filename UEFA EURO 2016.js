Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016([home,away], [scoreHome,scoreAway]){
  if (scoreHome==scoreAway) return `At match ${home} - ${away}, teams played draw.`
  if (scoreAway>scoreHome) return `At match ${home} - ${away}, ${away} won!`
  if (scoreAway<scoreHome) return `At match ${home} - ${away}, ${home} won!`
}
