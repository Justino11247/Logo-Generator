const Shapes = require('../lib/shapes');

describe('Shapes', () => {
    
    describe('Error Handling', () => {

        it('should throw an error that a child class must have its own render method rather than calling the parent method', () => {
          
            const shapes = new Shapes();
            const err = new Error('Children classes should have their own render function');
            expect(shapes.render).toThrow(err);
        })
    });

  });