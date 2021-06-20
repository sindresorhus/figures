import {expectType} from 'tsd';
import figures = require('.');
import {replaceSymbols, main, windows} from '.';

expectType<string>(replaceSymbols('✔︎ check'));
expectType<string>(figures.tick);
expectType<string>(main.tick);
expectType<string>(windows.tick);
