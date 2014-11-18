'use strict';
var test = require('ava');
var figures = require('./');

console.log('  ' + Object.keys(figures).map(function (el) {
	return figures[el];
}).join('  ') + '\n');

test('returns a figure', function (t) {
	t.assert(figures.tick === '✔' || figures.tick === '√');
});
