const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    
    describe('Render Method', () => {// Test the render method

        it('should return <polygon points="150, 18 244, 182 56, 182" fill="blue"/>', () => {

            const triangle = new Triangle();
            triangle.setColor('blue');
            const result = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
            expect(triangle.render()).toBe(result);
        })
    })
  });