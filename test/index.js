var it = require('tape'),
    fs = require('fs'),
    mpg123 = require('..')

it('should find mpg123', function(t) {
  var stats = fs.statSync(mpg123.path)
  t.ok(stats.isFile(mpg123.path))
  t.end()
});