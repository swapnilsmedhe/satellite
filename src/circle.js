const { Point } = require('./point.js');
const { Style } = require('./style.js');

const toRadian = (angle) => Math.PI * (angle / 180);

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

  revolve(pole, angularDisplacement) {
    const distanceFromPole = this.center.distanceBetween(pole);
    const displacementInRadians = toRadian(angularDisplacement);
    const abscissa = distanceFromPole * Math.cos(displacementInRadians);
    const ordinate = distanceFromPole * Math.sin(displacementInRadians);
    const x = abscissa + pole.x;
    const y = ordinate + pole.y;
    return new Circle(this.radius, new Point(x, y));
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
