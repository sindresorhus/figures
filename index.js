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
	bullet: common.bullet,
	dot: common.dot,
	line: common.line,
	ellipsis: common.ellipsis,
	pointer: '❯',
	pointerSmall: common.pointerSmall,
	info: 'ℹ',
	warning: '⚠',
	hamburger: '☰',
	smiley: '㋡',
	mustache: '෴',
	heart: common.heart,
	nodejs: '⬢',
	arrowUp: common.arrowUp,
	arrowDown: common.arrowDown,
	arrowLeft: common.arrowLeft,
	arrowRight: common.arrowRight,
	arrowLeftRight: common.arrowLeftRight,
	arrowUpDown: common.arrowUpDown,
	radioOn: '◉',
	radioOff: '◯',
	checkboxOn: '☒',
	checkboxOff: '☐',
	checkboxCircleOn: 'ⓧ',
	checkboxCircleOff: 'Ⓘ',
	questionMarkPrefix: '?⃝',
	oneHalf: common.oneHalf,
	oneThird: common.oneThird,
	oneQuarter: common.oneQuarter,
	oneFifth: common.oneFifth,
	oneSixth: common.oneSixth,
	oneSeventh: '⅐',
	oneEighth: common.oneEighth,
	oneNinth: '⅑',
	oneTenth: '⅒',
	twoThirds: common.twoThirds,
	twoFifths: common.twoFifths,
	threeQuarters: common.threeQuarters,
	threeFifths: common.threeFifths,
	threeEighths: common.threeEighths,
	fourFifths: common.fourFifths,
	fiveSixths: common.fiveSixths,
	fiveEighths: common.fiveEighths,
	sevenEighths: common.sevenEighths
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
	bullet: common.bullet,
	dot: common.dot,
	line: common.line,
	ellipsis: common.ellipsis,
	pointer: '>',
	pointerSmall: common.pointerSmall,
	info: 'i',
	warning: '‼',
	hamburger: '≡',
	smiley: '☺',
	mustache: '┌─┐',
	heart: common.heart,
	nodejs: '♦',
	arrowUp: common.arrowUp,
	arrowDown: common.arrowDown,
	arrowLeft: common.arrowLeft,
	arrowRight: common.arrowRight,
	arrowLeftRight: common.arrowLeftRight,
	arrowUpDown: common.arrowUpDown,
	radioOn: '(*)',
	radioOff: '( )',
	checkboxOn: '[×]',
	checkboxOff: '[ ]',
	checkboxCircleOn: '(×)',
	checkboxCircleOff: '( )',
	questionMarkPrefix: '？',
	oneHalf: common.oneHalf,
	oneThird: common.oneThird,
	oneQuarter: common.oneQuarter,
	oneFifth: common.oneFifth,
	oneSixth: common.oneSixth,
	oneSeventh: '1/7',
	oneEighth: common.oneEighth,
	oneNinth: '1/9',
	oneTenth: '1/10',
	twoThirds: common.twoThirds,
	twoFifths: common.twoFifths,
	threeQuarters: common.threeQuarters,
	threeFifths: common.threeFifths,
	threeEighths: common.threeEighths,
	fourFifths: common.fourFifths,
	fiveSixths: common.fiveSixths,
	fiveEighths: common.fiveEighths,
	sevenEighths: common.sevenEighths
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
