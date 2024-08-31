const Shapes = require('./shapes');

class Triangle extends Shapes {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }

  getTextPosition() {
    return { x: 150, y: 140, fontSize: 40 };
  }
}

module.exports = Triangle;