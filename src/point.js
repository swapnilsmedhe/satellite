// Rename function 
const isRoundEqual = (num1, num2) => num1.toFixed(2) === num2.toFixed(2);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      isRoundEqual(this.x, otherPoint.x) &&
      isRoundEqual(this.y, otherPoint.y);
  }

  offsetBy(offsetX, offsetY) {
    return new Point(this.x + offsetX, this.y + offsetY);
  }

  distanceBetween(otherPoint) {
    return Math.hypot(otherPoint.x - this.x, otherPoint.y - this.y);
  }
}

exports.Point = Point;
