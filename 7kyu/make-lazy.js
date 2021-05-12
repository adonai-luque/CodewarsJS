// Lazily executing a function

var make_lazy = function (notLazy, ...args) {
  return function() { return notLazy(...args); };
};
