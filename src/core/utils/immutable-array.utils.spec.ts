import * as immutable from './immutable-array.utils';

describe('immutable-array utils', () => {
  describe('push()', () => {
    it('should push the item', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 1, 2, 3, 100];
      const actual = immutable.push(original, 100);
      expect(actual).toEqual(expected);
    });

    it('should not change the original', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 1, 2, 3];
      immutable.push(original, 100);
      expect(original).toEqual(expected);
    });
  });

  describe('splice()', () => {
    it('should delete items', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 3];
      const actual = immutable.splice(original, 1, 2);
      expect(actual).toEqual(expected);
    });

    it('should insert the items', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 1, 100, 101, 2, 3];
      const actual = immutable.splice(original, 2, 0, [100, 101]);
      expect(actual).toEqual(expected);
    });

    it('should delete & insert', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 100, 101, 3];
      const actual = immutable.splice(original, 1, 2, [100, 101]);
      expect(actual).toEqual(expected);
    });

    it('should not change the original', () => {
      const original = [0, 1, 2, 3];
      const expected = [0, 1, 2, 3];
      immutable.splice(original, 2, 2, [100, 101]);
      expect(original).toEqual(expected);
    });
  });
});
