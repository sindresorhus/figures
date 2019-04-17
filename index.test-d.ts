import {expectType} from 'tsd';
import figures = require('.');

expectType<string>(figures('✔︎ check'));
expectType<string>(figures.tick);
