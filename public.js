import Engine from './engine/game';
import Local from './data_providers/local';

exports.Game = {
  Engine,
  dataProviders: {
    Local,
  }
};

// module.exports = Engine;
