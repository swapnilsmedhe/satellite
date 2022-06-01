const assert = require('assert');
const { Point } = require('../src/point.js');
const { Circle } = require('../src/circle.js');
const { Angle } = require('../src/angle.js');

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

  it('should generate HTML for Circle', () => {
    const circle = new Circle(5, new Point(50, 50));
    const actual = circle.toHTML();
    const expected = '<div style="position: absolute;top: 45;left: 45;height: 10;width: 10;border: 1px solid black;border-radius: 50%"></div>';

    assert.strictEqual(actual, expected);
  });

  it('should move a circle by 90deg around a given point', () => {
    const circle = new Circle(10, new Point(100, 50));
    const actual = circle.revolve(new Point(50, 50), new Angle(90));
    const expected = new Circle(10, new Point(50, 100));
    assert.ok(actual.equals(expected));
  });

  it('should move a circle by 180deg around a given point', () => {
    const circle = new Circle(10, new Point(100, 50));
    const actual = circle.revolve(new Point(50, 50), new Angle(180));
    const expected = new Circle(10, new Point(0, 50));
    assert.ok(actual.equals(expected));
  });
});
