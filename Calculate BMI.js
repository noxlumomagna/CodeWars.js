Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

function bmi(weight,height) {
  let calc = weight/height**2
  if (calc<=18.5) return 'Underweight'
  if (calc<=25) return 'Normal'
  if (calc<=30) return 'Overweight'
  if (calc>30) return 'Obese'
}
