const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const circle = require('./circle');
const square = require('./square');
const triangle = require('./triangle')

class CLI {
  constructor(){

  }

  run(){
    const questions = [ 
      {
        type: 'input',
        message: ('Enter 3 characters.'),
        name: 'text',
      },
      {
        type: 'input',
        message: ('Enter a color keyword or hexadecimal number for the text color.'),
        name: 'textcolor',
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
        name: 'shapecolor',
      }
    ];

    return inquirer.prompt(questions)
    .then((answers) => {
      const shape = this.getShape(answers.shape);
      this.renderLogo(answers.text, answers.textcolor, shape, answers.shapecolor);
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