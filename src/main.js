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

class Main {
	constructor() {
		this._teamArray = [];
	}

	async _easy() {
		let teamHTMLString = '';
		for (const teamMember of this._teamArray) {
			teamHTMLString += teamMember.easy();
		}

		const result = Main._templateStart + teamHTMLString + Main._templateEnd;

		await writeFileAsync(path.resolve(__dirname, '..', 'dist', 'easy.html'), result);
	}
