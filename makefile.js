#!/usr/bin/env node
'use strict';
const fs = require('fs');
const importFresh = require('import-fresh');
const table = require('markdown-table');

const load = value => {
	Object.defineProperty(process, 'platform', {value});
	return importFresh('.');
};

const darwin = load('darwin');
const win32 = load('win32');

const jsonTable = [
	['Name', 'Real OSes', 'Windows']
];

Object.keys(darwin).forEach(key => {
	jsonTable.push([key, darwin[key], win32[key]]);
});

const figureTable = table(jsonTable, {align: ['', 'c', 'c']});

let readme = fs.readFileSync('readme.md', 'utf8');
readme = readme.replace(/## Figures[^#]*/gm, `## Figures\n\n${figureTable}\n\n\n`);

fs.writeFileSync('readme.md', readme);
