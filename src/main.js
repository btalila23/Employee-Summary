const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const ejs = require('ejs');

const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
