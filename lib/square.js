const Shapes = require('./shapes');

class Square extends Shapes {
  constructor() {
    super();
  }

  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`;
  }

  getTextPosition() {
    return { x: 150, y: 115, fontSize: 60 };
  }
}

module.exports = Square;