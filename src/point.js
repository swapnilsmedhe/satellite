const isEqualUptoTwoDecimal = (num1, num2) =>
  num1.toFixed(2) === num2.toFixed(2);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      isEqualUptoTwoDecimal(this.x, otherPoint.x) &&
      isEqualUptoTwoDecimal(this.y, otherPoint.y);
  }

  translate(offsetX, offsetY) {
    return new Point(this.x + offsetX, this.y + offsetY);
  }

  distanceFrom(otherPoint) {
    return Math.hypot(otherPoint.x - this.x, otherPoint.y - this.y);
  }
}

exports.Point = Point;
