const assert = require('assert');
const { Point } = require('../src/point.js');
const { Circle } = require('../src/satellite.js');

describe('Circle', () => {
  it('should equate two same circles', () => {
    const circle = new Circle(5, new Point(10, 10));
    assert.ok(circle.equals(circle));
    assert.ok(circle.equals(new Circle(5, new Point(10, 10))));
  });

  it('should not equate two different circles', () => {
    const circle1 = new Circle(8, new Point(2, 7));
    const circle2 = new Circle(2, new Point(2, 7));
    assert.ok(!circle1.equals(circle2));
  });
});
