class Style {
  constructor() {
    this.attributes = [];
  }

  addAttribute(property, value) {
    this.attributes.push([property, value]);
  }

  getStyle() {
    return this.attributes.map((x) => x.join(': ')).join(';');
  }
}

exports.Style = Style;
