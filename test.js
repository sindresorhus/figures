import test from 'ava';
import figures from './';

console.log('  ' + Object.keys(figures).map(function (el) {
	return figures[el];
}).join('  ') + '\n');

test('returns a figure', t => {
	t.true(figures.tick === '✔' || figures.tick === '√');
	t.end();
});
