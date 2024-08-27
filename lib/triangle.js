const Shapes = require('./shapes');

class Triangle extends Shapes{
    render(){// Returns a Triangle
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}"/>`
    }
}

module.exports = Triangle;