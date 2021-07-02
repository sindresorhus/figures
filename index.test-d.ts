import {expectType} from 'tsd';
import figures, {replaceSymbols, mainSymbols, windowsSymbols} from './index.js';

expectType<string>(replaceSymbols('✔︎ check'));
expectType<string>(figures.tick);
expectType<string>(mainSymbols.tick);
expectType<string>(windowsSymbols.tick);
