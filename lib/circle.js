const Shapes = require('./shapes');

class Circle extends Shapes {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }

  getTextPosition() {
    return { x: 150, y: 115, fontSize: 60 };
  }
}

module.exports = Circle;