const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const circle = require('./circle');
const square = require('./square');
const triangle = require('./triangle');
const validateColor = require('validate-color').default;

class CLI {

  constructor() {
    this.validShape = ['Circle', 'Triangle', 'Square'];
  }; 

  getShape(shape) {
    if (this.validShape.includes(shape)) {
        switch (shape) {
            case 'Circle':
                return new circle();
            case 'Triangle':
                return new triangle();
            case 'Square':
                return new square();
            default:
                throw new Error("Not a valid shape!");
        }   
    } else {
        throw new Error("Not a valid shape!");
    }
}
  
  // Uses the npm package validate color to verify if the input is a valid color or not
  validColor(color){
    if(!validateColor(color)){
        return "Invalid color please try again!"
    }
    else{
        return  true;
    }
  }

// Error Handling to prevent text input from being more then 3 in length
  validLength(text){
    if(text.length > 3){
        return "Text must be at most 3 in length, please try again!";
    }
    else{
        return true;
    }
  }



  // Makes the SVG Logo using the user input as params
  renderLogo(shape, shapeColor, text, letterColor) {
    try {
      if (typeof shape === 'object' && 'setColor' in shape) {
        shape.setColor(shapeColor);
        
        const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shape.render()}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${letterColor}">${text}</text>
        </svg>`;
        
        writeFile('./examples/logo.svg', svgContent, 'utf-8')
          .then(() => {
            console.log("Generated logo.svg");
          })
          .catch((err) => {
            throw new Error(`Failed to write SVG file: ${err.message}`);
          });
      } else {
        throw new Error(`Invalid shape object: ${JSON.stringify(shape)}`);
      }
    } catch (error) {
      console.error(`Error has occurred: ${error.message}`);
    }
  }

  async run(){
    const questions = [ 
      {
        type: 'input',
        message: ('Enter up to 3 letters for the logo..'),
        name: 'text',
        validate: this.validLength
      },
      {
        type: 'input',
        message: ('Enter a color keyword or hexadecimal number for the text color.'),
        name: 'textcolor',
        validate: this.validColor
      },
      {
        type: 'list',
        message: ('Choose a shape.'),
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        message: ('Enter a color keyword or hexadecimal number for the shape color'),
        name: 'shapeColor',
        validate: this.validColor
      }
    ];

    

    

    return inquirer.prompt(questions)
    .then((answers) => {
      const shape = this.getShape(answers.shape);
      this.renderLogo(shape, answers.shapeColor, answers.text, answers.textcolor);
    });
    }
  }


module.exports = CLI;