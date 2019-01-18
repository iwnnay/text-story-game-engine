import BaseDataProvider from './base';

export default class LocalDataProvider extends BaseDataProvider {
  constructor(locationData) {
    super();
    if (!locationData.locations) {
      throw new Error('LocalDataProvider expects first argument to have a key of Locations');
    }
    this.locations = locationData.locations;
  }
}
