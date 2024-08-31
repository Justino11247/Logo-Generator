const Square = require('../lib/square');

describe('Square', () => {// Test the render method

    describe('Render Method', () => {

        it('should return <rect x="75" y="25" width="150" height="150" fill="red"/>', () => {

            const square = new Square();
            square.setColor('red');
            const result = '<rect x="75" y="25" width="150" height="150" fill="red"/>'
            expect(square.render()).toBe(result);
        })
    })
  });