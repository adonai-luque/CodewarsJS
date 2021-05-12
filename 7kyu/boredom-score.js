// The Office II - Boredom Score

function boredom(staff){
  let departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
  };
  let score = 0;
  for (let member in staff) score += departments[staff[member]];
  return (score <= 80) ? 'kill me now' :
    (score < 100) ? 'i can handle this' :
    'party time!!';
}
