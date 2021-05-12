function londonCityHacker(journey) {
  var acum = 0
  for (var i=0; i<journey.length; i++) {
      if (typeof(journey[i]) == "string") {
          acum += 2.40
      }
      else if (typeof(journey[i]) == "number") {
          acum += 1.5
          if (typeof(journey[i+1]) == "number") {
              journey[i+1] = false
          }
      }        
  }
  return ("£" + acum.toFixed(2))
}
