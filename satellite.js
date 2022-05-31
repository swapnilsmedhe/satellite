const fs = require('fs');
const { Circle } = require('./src/circle.js');
const { Point } = require('./src/point.js');

const orbit = new Circle(100, new Point(400, 400));
const satellite = new Circle(20, new Point(300, 400));

const html = satellite.moveAround(new Point(400, 400), 450).toHTML();

fs.writeFileSync('satellite.html', orbit.toHTML() + html, 'utf8');
