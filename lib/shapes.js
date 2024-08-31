class Shapes {
  constructor() {
    this.color = '';
  }

  render() {
    throw new Error('Children classes should have their own render function');
  }

  setColor(color) {
    this.color = color; // Sets shape's color
  }
}

module.exports = Shapes;