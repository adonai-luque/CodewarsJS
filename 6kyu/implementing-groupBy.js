// Implementing Array.prototype.groupBy method

Array.prototype.groupBy = function(fn) {
  grouped = {};
  this.forEach(e => fn ? grouped[fn(e)] = grouped[fn(e)] || [] : grouped[e] = grouped[e] || []);
  this.forEach(e => fn ? grouped[fn(e)].push(e) : grouped[e].push(e));
  return grouped;
}
