const { Style } = require('./style.js');

class Circle {
  constructor(radius, center) {
    this.radius = radius;
    this.center = center;
  }

  equals(otherCircle) {
    return otherCircle instanceof Circle &&
      this.center.equals(otherCircle.center) &&
      this.radius === otherCircle.radius;
  }

  toHTML() {
    const style = new Style();
    const projectionPoint = this.center.offsetBy(-this.radius, -this.radius);

    style.addAttribute('position', 'absolute');
    style.addAttribute('top', projectionPoint.y);
    style.addAttribute('left', projectionPoint.x);
    style.addAttribute('height', this.radius * 2);
    style.addAttribute('width', this.radius * 2);
    style.addAttribute('border', '1px solid black');
    style.addAttribute('border-radius', '50%');

    return `<div style="${style.getStyle()}"></div>`;
  }
}

exports.Circle = Circle;
