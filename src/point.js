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
}

exports.Point = Point;
