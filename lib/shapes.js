class Shapes{
  constructor(){
  }
  render(){
      throw new Error('Children classes should have their own render function');
  }
  setColor(color){
      this.color = color; // Sets the color of the shape
  }
}

const shapes = new Shapes();

module.exports = Shapes;