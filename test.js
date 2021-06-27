import test from 'ava';
import isUnicodeSupported from 'is-unicode-supported';
import figures, {replaceSymbols, mainSymbols, fallbackSymbols} from './index.js';

const result = (mainSymbols, fallbackSymbols) => isUnicodeSupported() ? mainSymbols : fallbackSymbols;

console.log(`  ${Object.values(figures).join('  ')}\n`);

test('figures', t => {
	t.is(figures.tick, result('✔', '√'));
});

test('replaceSymbols()', t => {
	t.is(replaceSymbols('foo'), 'foo');
	t.is(replaceSymbols('?bar?'), '?bar?');
	t.is(replaceSymbols('✔ ✔ ✔'), result('✔ ✔ ✔', '√ √ √'));
	t.is(replaceSymbols('✔ ✖\n★ ◼'), result('✔ ✖\n★ ◼', '√ ×\n✶ ■'));
	t.is(replaceSymbols('✔ ✖ ★ ◼'), result('✔ ✖ ★ ◼', '√ × ✶ ■'));
});

test('mainSymbols and windowsSymbols', t => {
	t.is(mainSymbols.tick, '✔');
	t.is(fallbackSymbols.tick, '√');
});

test('figures are non-empty strings', t => {
	for (const figure of Object.values(figures)) {
		t.true(typeof figure === 'string' && figure.trim() !== '');
	}
});
