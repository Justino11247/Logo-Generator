const Circle = require('../lib/circle');

describe('Circle', () => {
    
    describe('Render Method', () => {// Tests the render method

        it('should return <circle cx="150" cy="100" r="80" fill="red"/>', () => {

            const circle = new Circle();
            circle.setColor('red');
            const result = '<circle cx="150" cy="100" r="80" fill="red"/>'
            expect(circle.render()).toBe(result);
        })
    })
  });