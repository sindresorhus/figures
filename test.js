'use strict';
var test = require('ava');
var figures = require('./');

test('returns a figure', function (t) {
	t.assert(figures.tick === '✔︎' || figures.tick === '√');
});
