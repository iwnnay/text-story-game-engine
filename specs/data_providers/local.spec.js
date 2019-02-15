import Local from '../../data_providers/local';

describe('LocalDataProvider', () => {
  describe('constructor', () => {
    it('should throw an error if constructor data has no locations', () => {
      const msg = 'LocalDataProvider expects first argument to have a key of Locations';
      expect(Local({})).toThrow(new Error(msg));
    });
  });
});
