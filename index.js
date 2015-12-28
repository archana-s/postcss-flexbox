var postcss = require('postcss');
var layouts = require('./flexbox-configs.js');

var appendProps = function(name, rule) {
  // check if the property exists in the configs
  if (layouts.hasOwnProperty(name)) {
    var props = layouts[name];
    for (var i=0; i<props.length; i++) {
      rule.append(props[i]);
    }
  }
};

var appendBoxProps = function(decl, rule) {
  // Add display flex for everything that is a box.
  appendProps(decl.prop, rule);

  // Identify whether row or column
  var direction = decl.value.indexOf('horizontal') >= 0 ? 'horizontal':'vertical';

  var allValues = decl.value.split(' ');

  // Loop through all values and apply the styles
  for (var i=0; i<allValues.length; i++) {
    var currValue = allValues[i].toLowerCase();
    // direction  specific rules
    if (layouts['direction-specific-values'].indexOf(currValue) >= 0) {
      appendProps(direction + '-' + currValue, rule);
    } else { // direction-agnostic rules
      appendProps(currValue, rule);
    }
  }
  rule.removeChild(decl);
};

var appendBoxItemProps = function(decl, rule) {
  var allValues = decl.value.split(' ');

  // For every value, apply styles
  for (var i=0; i<allValues.length; i++) {
    var currValue = allValues[i].toLowerCase();

    // No need for prefix for flex-n
    if (currValue.indexOf('flex') < 0) {
      appendProps('self-' + currValue, rule);
    } else {
      appendProps(currValue, rule);
    }
  }
  rule.removeChild(decl);
};

module.exports = postcss.plugin('postcss-flexbox',
  function flexboxAdder(options) {
    return function (css) {
      options = options || {};

      css.walkDecls(function (decl, i) {
        var rule = decl.parent;
        var value = decl.prop;

        // Box layout
        if (decl.prop === 'box') {
          appendBoxProps(decl, rule);
        }
        // Items inside box layout
        if (decl.prop === 'box-item') {
          appendBoxItemProps(decl, rule);
        }
      });
    }
  });
