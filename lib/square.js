const Shapes = require('./shapes');

class Square extends Shapes{
    render(){ // Returns a square
        return `<rect width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = Square;