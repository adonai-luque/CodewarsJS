// Abbreviate a Two Word Name

function abbrevName(name){
  let names = name.split(" ");
  return `${names[0][0]}.${names[1][0]}`.toUpperCase()
}
