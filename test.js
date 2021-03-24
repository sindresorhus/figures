import test from 'ava';
import figures from '.';

const result = (main, windows) => process.platform === 'win32' ? windows : main;

console.log(`  ${Object.values(figures).join('  ')}\n`);

test('figures', t => {
	t.is(figures.tick, result('✔', '√'));
});

test('fallbacks', t => {
	t.is(figures('foo'), 'foo');
	t.is(figures('?bar?'), '?bar?');
	t.is(figures('✔ ✔ ✔'), result('✔ ✔ ✔', '√ √ √'));
	t.is(figures('✔ ✖\n★ ▇'), result('✔ ✖\n★ ▇', '√ ×\n✶ █'));
	t.is(figures('✔ ✖ ★ ▇'), result('✔ ✖ ★ ▇', '√ × ✶ █'));
});

test('exported sets', t => {
	t.is(figures.main.tick, '✔');
	t.is(figures.windows.tick, '√');
});

const NON_FIGURE_KEYS = new Set(['main', 'windows']);

test('figures are non-empty strings', t => {
	for (const [key, figure] of Object.entries(figures)) {
		if (NON_FIGURE_KEYS.has(key)) {
			continue;
		}

		t.true(typeof figure === 'string' && figure.trim() !== '');
	}
});
