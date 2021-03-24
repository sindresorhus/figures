'use strict';
const escapeStringRegexp = require('escape-string-regexp');

const {platform} = process;

const main = {
	tick: '✔',
	cross: '✖',
	star: '★',
	square: '▇',
	squareSmall: '◻',
	squareSmallFilled: '◼',
	play: '▶',
	circle: '◯',
	circleFilled: '◉',
	circleDotted: '◌',
	circleDouble: '◎',
	circleCircle: 'ⓞ',
	circleCross: 'ⓧ',
	circlePipe: 'Ⓘ',
	circleQuestionMark: '?⃝',
	bullet: '●',
	dot: '․',
	line: '─',
	ellipsis: '…',
	pointer: '❯',
	pointerSmall: '›',
	info: 'ℹ',
	warning: '⚠',
	hamburger: '☰',
	smiley: '㋡',
	mustache: '෴',
	heart: '♥',
	nodejs: '⬢',
	arrowUp: '↑',
	arrowDown: '↓',
	arrowLeft: '←',
	arrowRight: '→',
	arrowLeftRight: '↔',
	arrowUpDown: '↕',
	radioOn: '◉',
	radioOff: '◯',
	checkboxOn: '☒',
	checkboxOff: '☐',
	checkboxCircleOn: 'ⓧ',
	checkboxCircleOff: 'Ⓘ',
	questionMarkPrefix: '?⃝',
	oneHalf: '½',
	oneThird: '⅓',
	oneQuarter: '¼',
	oneFifth: '⅕',
	oneSixth: '⅙',
	oneSeventh: '⅐',
	oneEighth: '⅛',
	oneNinth: '⅑',
	oneTenth: '⅒',
	twoThirds: '⅔',
	twoFifths: '⅖',
	threeQuarters: '¾',
	threeFifths: '⅗',
	threeEighths: '⅜',
	fourFifths: '⅘',
	fiveSixths: '⅚',
	fiveEighths: '⅝',
	sevenEighths: '⅞'
};

const fallback = {
	tick: '√',
	cross: '×',
	star: '✶',
	square: '█',
	squareSmall: '□',
	squareSmallFilled: '■',
	play: '►',
	circle: '( )',
	circleFilled: '(*)',
	circleDotted: '( )',
	circleDouble: '( )',
	circleCircle: '(○)',
	circleCross: '(×)',
	circlePipe: '(│)',
	circleQuestionMark: '(?)',
	bullet: main.bullet,
	dot: main.dot,
	line: main.line,
	ellipsis: '...',
	pointer: '>',
	pointerSmall: main.pointerSmall,
	info: 'i',
	warning: '‼',
	hamburger: '≡',
	smiley: '☺',
	mustache: '┌─┐',
	heart: main.heart,
	nodejs: '♦',
	arrowUp: main.arrowUp,
	arrowDown: main.arrowDown,
	arrowLeft: main.arrowLeft,
	arrowRight: main.arrowRight,
	arrowLeftRight: main.arrowLeftRight,
	arrowUpDown: main.arrowUpDown,
	radioOn: '(*)',
	radioOff: '( )',
	checkboxOn: '[×]',
	checkboxOff: '[ ]',
	checkboxCircleOn: '(×)',
	checkboxCircleOff: '( )',
	questionMarkPrefix: '？',
	oneHalf: main.oneHalf,
	oneThird: main.oneThird,
	oneQuarter: main.oneQuarter,
	oneFifth: main.oneFifth,
	oneSixth: main.oneSixth,
	oneSeventh: '1/7',
	oneEighth: main.oneEighth,
	oneNinth: '1/9',
	oneTenth: '1/10',
	twoThirds: main.twoThirds,
	twoFifths: main.twoFifths,
	threeQuarters: main.threeQuarters,
	threeFifths: main.threeFifths,
	threeEighths: main.threeEighths,
	fourFifths: main.fourFifths,
	fiveSixths: main.fiveSixths,
	fiveEighths: main.fiveEighths,
	sevenEighths: main.sevenEighths
};

if (platform === 'linux') {
	// The main one doesn't look that good on Ubuntu.
	main.questionMarkPrefix = '?';
}

// TODO: Use https://github.com/sindresorhus/is-unicode-supported when targeting Node.js 10.
const figures = platform === 'win32' ? fallback : main;

const fn = string => {
	if (figures === main) {
		return string;
	}

	for (const [key, value] of Object.entries(main)) {
		if (value === figures[key]) {
			continue;
		}

		string = string.replace(new RegExp(escapeStringRegexp(value), 'g'), figures[key]);
	}

	return string;
};

module.exports = Object.assign(fn, figures);
module.exports.main = main;
module.exports.windows = fallback;
