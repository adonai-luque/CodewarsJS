// Array#reduce

Array.prototype.reduce = function(process, initial) {
  this.forEach( (element) => initial = initial ? process(initial, element) : element );
  return initial;
}
