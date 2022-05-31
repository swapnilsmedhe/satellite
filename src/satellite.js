class Circle {
  constructor(radius, centerCoordinates) {
    this.radius = radius;
    this.centerCoordinates = centerCoordinates;
  }

  equals(otherCircle) {
    return otherCircle instanceof Circle &&
      this.centerCoordinates.equals(otherCircle.centerCoordinates) &&
      this.radius === otherCircle.radius;
  }
}

exports.Circle = Circle;
