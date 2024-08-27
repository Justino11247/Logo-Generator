const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const circle = require('./circle');
const square = require('./square');
const triangle = require('./triangle')

class CLI {

  constructor() {
    this.validShape = ['Circle', 'Triangle', 'Square'];
  }; 

  getShape(shape){
    if(this.validShape.includes(shape)){
        switch(shape){
          case 'Circle':
                shape = new circle();
                return shape;
            case 'Triangle':
                shape = new triangle();
                return shape;
            case 'Square':
                shape = new square();
                return shape;
            default:
                throw new Error("Not a valid shape!");
        }   
    }else{
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
  renderLogo(shape, shapeColor, text, letterColor){
    try {
        // Check if setColor method exists in shape as expected
        if('setColor' in shape){
            shape.setColor(shapeColor);
        
            writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shape.render()} <text x="150" y="125" font-size="60" text-anchor="middle" fill="${letterColor}">${text}</text> </svg>`, 'utf-8'); 
        console.log("Generated logo.svg");
        }
        else{
            throw new Error("Shape failed to inherit setColor or is an invalid Shape Object!")
        }
    } catch (error) {
        throw new Error(`Error has occured: ${error.message}`);
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
      this.renderLogo(answers.text, answers.textcolor, answers.shape, answers.shapeColor);
    });
  }

  
  
    /*run(){
        return inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            switch(answers.shape){
                case 'Triangle':
                    shape = new Triangle(answers.letters, answers.color);
                case 'Circle':
                    shape = new Circle(answers.letters, answers.color);
                case 'Square':
                    shape = new Square(answers.letters, answers.color);
            }
            writeFile('./examples/logo.svg', `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />                     
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>                     
            </svg>`, 'utf-8'); 
        console.log("Generated logo.svg");
        console.log(shape);
        });
    }*/
  }


module.exports = CLI;