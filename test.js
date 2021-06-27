import test from 'ava';
import isUnicodeSupported from 'is-unicode-supported';
import figures, {replaceSymbols, mainSymbols, windowsSymbols} from './index.js';

const result = (mainSymbols, windowsSymbols) => isUnicodeSupported() ? mainSymbols : windowsSymbols;

const NON_FIGURE_KEYS = new Set(['mainSymbols', 'windowsSymbols', 'replaceSymbols']);
const getFigures = () => Object.entries(figures)
	.filter(([key]) => !NON_FIGURE_KEYS.has(key))
	.map(([, figure]) => figure);

console.log(`  ${getFigures().join('  ')}\n`);

test('figures', t => {
	t.is(figures.tick, result('✔', '√'));
});

test('fallbacks', t => {
	t.is(replaceSymbols('foo'), 'foo');
	t.is(replaceSymbols('?bar?'), '?bar?');
	t.is(replaceSymbols('✔ ✔ ✔'), result('✔ ✔ ✔', '√ √ √'));
	t.is(replaceSymbols('✔ ✖\n★ ◼'), result('✔ ✖\n★ ◼', '√ ×\n✶ ■'));
	t.is(replaceSymbols('✔ ✖ ★ ◼'), result('✔ ✖ ★ ◼', '√ × ✶ ■'));
});

test('exported sets', t => {
	t.is(mainSymbols.tick, '✔');
	t.is(windowsSymbols.tick, '√');
});

test('figures are non-empty strings', t => {
	for (const figure of getFigures()) {
		t.true(typeof figure === 'string' && figure.trim() !== '');
	}
});
