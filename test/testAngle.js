const assert = require('assert');
const { Angle } = require('../src/angle');

describe('Angle', () => {
  it('should equate two same angles', () => {
    const angle = new Angle(90);
    assert.ok(angle.equals(new Angle(90)));
  });

  it('should not equate two different angles', () => {
    const angle = new Angle(45);
    assert.ok(!angle.equals(new Angle(90)));
  });

  it('should convert 180deg to radian', () => {
    const angle = new Angle(180);
    const actual = angle.toRadian();
    const expected = 3.141592653589793;
    assert.strictEqual(actual, expected);
  });

  it('should convert 90deg to radian', () => {
    const angle = new Angle(90);
    const actual = angle.toRadian();
    const expected = 1.5707963267948966;
    assert.strictEqual(actual, expected);
  });
});
