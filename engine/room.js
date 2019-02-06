/**
 * Room example structure:
 * {
 *   id: String - Identifying name
 *   describe: String - Displayed
 *   coordinate: Array - [x, y] units inside parent Location, lower right of room
 *   dimensions: Array - [x, y, z] units inside of parent location
 *   items: Array - [String|Object] of items
 *   hasSeen: Boolean - Indicates if the room was described before
 * }
 */
import Item from './item';

export default class Room extends Item {
  set data(data) {
    this.loadedData = data;
    this.hasSeen = data.hasSeen || false;
    this.isVisible = true;
    this.items = [];

    (data.items || []).forEach((itemData) => {
      this.items.push(new Item(itemData));
    });
  }

  get data() {
    return {
      ...this.loadedData,
      hasSeen: this.hasSeen,
      isVisible: true
    };
  }
}
