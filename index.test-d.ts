import {expectType} from 'tsd';
import figures, {replaceSymbols, mainSymbols, fallbackSymbols} from './index.js';

expectType<string>(replaceSymbols('✔︎ check'));
expectType<string>(figures.tick);
expectType<string>(mainSymbols.tick);
expectType<string>(fallbackSymbols.tick);
