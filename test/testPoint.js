const assert = require('assert');
const { Point } = require('../src/point');

describe('Point', () => {
  it('should equate two same points', () => {
    const point = new Point(0, 0);
    assert.ok(point.equals(point));
    assert.ok(point.equals(new Point(0, 0)));
  });

  it('should not equate two different points', () => {
    const point1 = new Point(1, 5);
    const point2 = new Point(3, 8);
    assert.ok(!point1.equals(point2));
  });

  it('should translate the point by given positive offsets', () => {
    const point = new Point(0, 0);
    const actual = point.translate(1, 2);
    const expected = new Point(1, 2);
    assert.deepStrictEqual(actual, expected);
  });

  it('should translate the point by given negative offsets', () => {
    const point = new Point(0, 2);
    const actual = point.translate(-3, -4);
    const expected = new Point(-3, -2);
    assert.deepStrictEqual(actual, expected);
  });

  it('should calculate distance between two points', () => {
    const point1 = new Point(8, 0);
    const point2 = new Point(0, 0);
    const actual = point1.distanceFrom(point2);
    const expected = 8;
    assert.strictEqual(actual, expected);
  });

  it('should calculate distance two negative points', () => {
    const point1 = new Point(3, -2);
    const point2 = new Point(-5, 4);
    const actual = point1.distanceFrom(point2);
    const expected = 10;
    assert.strictEqual(actual, expected);
  });
});
