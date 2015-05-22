var test = require('tape');
var min = require('../array-min');

test('min', function (t) {
  t.plan(10);

  t.deepEqual(min([]), Infinity);
  t.deepEqual(min(2), Infinity);
  t.deepEqual(min('a'), Infinity);
  t.deepEqual(min(undefined), Infinity);
  t.deepEqual(min(null), Infinity);
  t.deepEqual(min({}), Infinity);
  t.deepEqual(min(Infinity), Infinity);
  t.deepEqual(min([2,1,3]), 1);

  t.deepEqual(min([{n:2}, {n:1}, {n:3}], function(x) {
    return x.n;
  }), {n:1});

  t.deepEqual(min([{n:2}, {n:1}, {n:3}], 'n'), {n:1});
});
