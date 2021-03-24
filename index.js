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
	ellipsis: main.ellipsis,
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

const isFallbackFigure = ([key, mainValue]) => figures[key] !== mainValue;
const getFigureRegExp = ([key, mainValue]) => [figures[key], new RegExp(escapeStringRegexp(mainValue), 'g')];

let replacements = [];
const getReplacements = () => {
	if (replacements.length !== 0) {
		return replacements;
	}

	replacements = Object.entries(main)
		.filter(isFallbackFigure)
		.map(getFigureRegExp);
	return replacements;
};

const replaceCharToFallback = (string, [fallbackValue, mainRegExp]) => string.replace(mainRegExp, fallbackValue);

// On Windows, substitute non-fallback to fallback figures
const replaceCharsToFallback = string => {
	if (figures === main) {
		return string;
	}

	return getReplacements().reduce(replaceCharToFallback, string);
};

module.exports = Object.assign(replaceCharsToFallback, figures);
module.exports.main = main;
module.exports.windows = fallback;
