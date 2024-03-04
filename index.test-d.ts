import {expectType, expectError} from 'tsd';
import figures, {mainSymbols, fallbackSymbols, replaceSymbols} from './index.js';

expectType<string>(figures.tick);

expectType<string>(mainSymbols.tick);

expectType<string>(fallbackSymbols.tick);

expectType<string>(replaceSymbols('✔ check'));
expectError(replaceSymbols(true));
expectError(replaceSymbols());

replaceSymbols('', {});
replaceSymbols('', {useFallback: undefined});
replaceSymbols('', {useFallback: true});
expectError(replaceSymbols('', {useFallback: 'other'}));
expectError(replaceSymbols('', {other: true}));
expectError(replaceSymbols('', ''));
