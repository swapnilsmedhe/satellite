class Angle {
  #angle;
  constructor(angle) {
    this.#angle = angle;
  }

  equals(otherAngle) {
    return otherAngle instanceof Angle &&
      this.#angle === otherAngle.#angle;
  }

  toRadian() {
    return Math.PI * (this.#angle / 180);
  }
}

exports.Angle = Angle;
