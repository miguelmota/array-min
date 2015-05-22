(function(root) {
  'use strict';

  function min(col, fn) {
    var bottom = Infinity;
    var index;
    if (Array.isArray(col)) {
      for (var i = 0; i < col.length; i++) {
        var result = col[i];
        if (typeof fn === 'function') {
          result = fn(col[i]);
        } else if (typeof fn === 'string') {
          result = col[i][fn];
        }
        if (result <= bottom) {
          bottom = result;
          index = i;
        }
      }
    }
    return typeof index !== 'undefined' ? col[index] : bottom;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = min;
    }
    exports.min = min;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return min;
    });
  } else {
    root.min = min;
  }

})(this);
