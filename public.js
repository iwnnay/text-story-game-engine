'use strict';
import Engine from './engine/game';
import Local from './data_providers/local';

Engine.dataProviders = { Local };

module.exports = Engine;
Object.defineProperty('default', module.exports, { get: Engine });
