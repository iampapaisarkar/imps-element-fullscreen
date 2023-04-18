const fs = require('fs');
const path = require('path');

const tag = process.env.npm_config_tag; // get the tag variable value from the npm_config_tag environment variable

if (tag === 'v2') { // if the tag variable is set to "v2"
  const inputFilePath = path.join(__dirname, 'src', 'index.v2.js'); // input file path
  const outputFilePath = path.join(__dirname, 'src', 'index.js'); // output file path

  console.log(`Compiling ${inputFilePath} to ${outputFilePath}...`); // output a message to the console

  // read the input file and compile it using Babel
  const inputCode = fs.readFileSync(inputFilePath, 'utf8');
  const babel = require('@babel/core');
  const outputCode = babel.transform(inputCode, { presets: ['@babel/preset-env'] }).code;

  // write the compiled code to the output file
  fs.writeFileSync(outputFilePath, outputCode);

  console.log('Compilation complete.'); // output a message to the console
} else if (tag === 'v3') { // if the tag variable is set to "v3"
  const inputFilePath = path.join(__dirname, 'src', 'index.v3.js'); // input file path
  const outputFilePath = path.join(__dirname, 'src', 'index.js'); // output file path

  console.log(`Compiling ${inputFilePath} to ${outputFilePath}...`); // output a message to the console

  // read the input file and write it to the output file
  const inputCode = fs.readFileSync(inputFilePath, 'utf8');
  fs.writeFileSync(outputFilePath, inputCode);

  console.log('Compilation complete.'); // output a message to the console
}
