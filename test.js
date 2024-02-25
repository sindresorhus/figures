import test from 'ava';
import isUnicodeSupported from 'is-unicode-supported';
import figures, {replaceSymbols, mainSymbols, fallbackSymbols} from './index.js';

const getCorrectSymbols = (mainSymbols, fallbackSymbols) => isUnicodeSupported() ? mainSymbols : fallbackSymbols;
const getMainSymbols = mainSymbols => mainSymbols;
const getFallbackSymbols = (mainSymbols, fallbackSymbols) => fallbackSymbols;

console.log(`  ${Object.values(figures).join('  ')}\n`);

test('figures', t => {
	t.is(figures.tick, getCorrectSymbols('✔', '√'));
});

test('mainSymbols', t => {
	t.is(mainSymbols.tick, '✔');
});

test('fallbackSymbols', t => {
	t.is(fallbackSymbols.tick, '√');
});

const testKeepFigures = (t, useFallback) => {
	t.is(replaceSymbols('foo', {useFallback}), 'foo');
};

test('replaceSymbols() keep non-figures as is', testKeepFigures, undefined);
test('"useFallback: false" keep non-figures as is', testKeepFigures, false);
test('"useFallback: true" keep non-figures as is', testKeepFigures, true);

const testReplace = (t, useFallback, getSymbols) => {
	t.is(replaceSymbols('✔ ✔ ✔', {useFallback}), getSymbols('✔ ✔ ✔', '√ √ √'));
	t.is(replaceSymbols('✔ ✘\n★ ◼', {useFallback}), getSymbols('✔ ✘\n★ ◼', '√ ×\n✶ ■'));
	t.is(replaceSymbols('✔ ✘ ★ ◼', {useFallback}), getSymbols('✔ ✘ ★ ◼', '√ × ✶ ■'));
};

test('replaceSymbols() sometimes replaces figures', testReplace, undefined, getCorrectSymbols);
test('"useFallback: false" never replaces figures', testReplace, false, getMainSymbols);
test('"useFallback: true" always replaces figures', testReplace, true, getFallbackSymbols);

test('figures are non-empty strings', t => {
	for (const figure of Object.values(figures)) {
		t.true(typeof figure === 'string' && figure.trim() !== '');
	}
});
