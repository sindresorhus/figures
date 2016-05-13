import test from 'ava';
import m from './';

console.log('  ' + Object.keys(m).map(x => m[x]).join('  ') + '\n');

test(t => {
	t.true(m.tick === '✔' || m.tick === '√');
});
