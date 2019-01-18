'use strict';
const Engine = require('./engine/game').default;
const Local = require('./data_providers/local').default;

Engine.dataProviders = { Local: Local };

module.exports = Engine;
