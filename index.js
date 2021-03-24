'use strict';
const escapeStringRegexp = require('escape-string-regexp');

const {platform} = process;

const common = {
	bullet: '●',
	dot: '․',
	line: '─',
	ellipsis: '…',
	pointerSmall: '›',
	heart: '♥',
	arrowUp: '↑',
	arrowDown: '↓',
	arrowLeft: '←',
	arrowRight: '→',
	arrowLeftRight: '↔',
	arrowUpDown: '↕',
	oneHalf: '½',
	oneThird: '⅓',
	oneQuarter: '¼',
	oneFifth: '⅕',
	oneSixth: '⅙',
	oneEighth: '⅛',
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

const main = {
	...common,
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
	pointer: '❯',
	info: 'ℹ',
	warning: '⚠',
	hamburger: '☰',
	smiley: '㋡',
	mustache: '෴',
	nodejs: '⬢',
	radioOn: '◉',
	radioOff: '◯',
	checkboxOn: '☒',
	checkboxOff: '☐',
	checkboxCircleOn: 'ⓧ',
	checkboxCircleOff: 'Ⓘ',
	questionMarkPrefix: '?⃝',
	oneSeventh: '⅐',
	oneNinth: '⅑',
	oneTenth: '⅒'
};

const fallback = {
	...common,
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
	pointer: '>',
	info: 'i',
	warning: '‼',
	hamburger: '≡',
	smiley: '☺',
	mustache: '┌─┐',
	nodejs: '♦',
	radioOn: '(*)',
	radioOff: '( )',
	checkboxOn: '[×]',
	checkboxOff: '[ ]',
	checkboxCircleOn: '(×)',
	checkboxCircleOff: '( )',
	questionMarkPrefix: '？',
	oneSeventh: '1/7',
	oneNinth: '1/9',
	oneTenth: '1/10'
};

if (platform === 'linux') {
	// The main one doesn't look that good on Ubuntu.
	main.circleQuestionMark = '?';
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
