var postcss = require('postcss');
var test = require('ava');
var flexbox = require('./');
var fs = require('fs');

require.extensions['.css'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

var inputCSS = require("./test/input.css");
var outputCSS = require("./test/output.css");

function run(t, input, output, opts) {
  return postcss([ flexbox(opts) ]).process(input)
    .then(function(result) {
        t.deepEqual(result.css, output);
        t.deepEqual(result.warnings().length, 0);
    });
}

test('converts box and box-item to flexbox props and values', function(t) {
  return run(t, inputCSS, outputCSS, { });
})

