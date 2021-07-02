import test from 'ava';
// eslint-disable-next-line unicorn/import-index, import/extensions
import figures, {replaceSymbols, mainSymbols, windowsSymbols} from './index.js';

const result = (mainSymbols, windowsSymbols) => process.platform === 'win32' ? windowsSymbols : mainSymbols;

const NON_FIGURE_KEYS = new Set(['mainSymbols', 'windowsSymbols', 'replaceSymbols']);
const isFigureKey = ([key]) => !NON_FIGURE_KEYS.has(key);
const getFigure = ([, figure]) => figure;
const getFigures = () => Object.entries(figures).filter(isFigureKey).map(getFigure);

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
