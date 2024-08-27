const Shapes = require('./shapes');

class Circle extends Shapes{ 
    render(){ // Returns a circle
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>` 
    }
}

module.exports = Circle;