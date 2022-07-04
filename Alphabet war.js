Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight){
   let map={    
                w:-4,
                p:-3,
                b:-2,
                s:-1,
                m:4,
                q:3,
                d:2,
                z:1
               }
   let war = fight.split("").reduce((a,b) => a + (map[b] || 0),0)
   return war ? (war < 0 ? "Left side wins!" : "Right side wins!") : "Let's fight again!"
}
