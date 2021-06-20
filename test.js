import test from 'ava';
import figures, {replaceSymbols, main, windows} from '.';

const result = (main, windows) => process.platform === 'win32' ? windows : main;

const NON_FIGURE_KEYS = new Set(['main', 'windows', 'replaceSymbols']);
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
	t.is(main.tick, '✔');
	t.is(windows.tick, '√');
});

test('figures are non-empty strings', t => {
	for (const figure of getFigures()) {
		t.true(typeof figure === 'string' && figure.trim() !== '');
	}
});
