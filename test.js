import test from 'ava';
import m from './';

const result = (main, win) => process.platform === 'win32' ? win : main;

console.log('  ' + Object.keys(m).map(x => m[x]).join('  ') + '\n');

test('figures', t => {
	t.is(m.tick, result('✔', '√'));
});

test('fallbacks', t => {
	t.is(m('✔ ✖ ★ ▇'), result('✔ ✖ ★ ▇', '√ × * █'));
});
