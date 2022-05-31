class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      this.x === otherPoint.x &&
      this.y === otherPoint.y;
  }

  offsetBy(offsetX, offsetY) {
    return new Point(this.x + offsetX, this.y + offsetY);
  }
}

exports.Point = Point;
