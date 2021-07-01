import {expectType} from 'tsd';
import figures = require('.');
import {replaceSymbols, mainSymbols, windowsSymbols} from '.';

expectType<string>(replaceSymbols('✔︎ check'));
expectType<string>(figures.tick);
expectType<string>(mainSymbols.tick);
expectType<string>(windowsSymbols.tick);
