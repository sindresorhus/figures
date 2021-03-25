'use strict';
const escapeStringRegexp = require('escape-string-regexp');

const {platform} = process;

const common = {
	bullet: '●',
	dot: '․',
	line: '─',
	ellipsis: '…',
	pointerSmall: '›',
	triangleUp: '▲',
	triangleUpSmall: '▴',
	triangleDown: '▼',
	triangleDownSmall: '▾',
	triangleLeftSmall: '◂',
	triangleRightSmall: '▸',
	home: '⌂',
	heart: '♥',
	arrowUp: '↑',
	arrowDown: '↓',
	arrowLeft: '←',
	arrowRight: '→',
	arrowLeftRight: '↔',
	arrowUpDown: '↕',
	subscriptZero: '₀',
	subscriptOne: '₁',
	subscriptTwo: '₂',
	subscriptThree: '₃',
	subscriptFour: '₄',
	subscriptFive: '₅',
	subscriptSix: '₆',
	subscriptSeven: '₇',
	subscriptEight: '₈',
	subscriptNine: '₉',
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
	triangleUpOutline: '△',
	triangleLeft: '◀',
	triangleRight: '▶',
	lozenge: '◆',
	lozengeOutline: '◇',
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
	triangleUpOutline: '∆',
	triangleLeft: '◄',
	triangleRight: '►',
	lozenge: '♦',
	lozengeOutline: '◊',
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

const isFallbackFigure = ([key, mainValue]) => figures[key] !== mainValue;
const getFigureRegExp = ([key, mainValue]) => [new RegExp(escapeStringRegexp(mainValue), 'g'), figures[key]];

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

// On Windows, substitute non-fallback to fallback figures
const replaceCharsToFallback = string => {
	if (figures === main) {
		return string;
	}

	for (const [mainRegExp, fallbackValue] of getReplacements()) {
		string = string.replace(mainRegExp, fallbackValue);
	}

	return string;
};

module.exports = Object.assign(replaceCharsToFallback, figures);
module.exports.main = main;
module.exports.windows = fallback;
