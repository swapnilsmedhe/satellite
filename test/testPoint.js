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
});
