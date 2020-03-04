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
    async run() {


		this._teamArray = [
			new Engineer('engineer name', 'engineer email', 'engineer github'),
			new Intern('intern name', 'intern email', 'intern school'),
			new Manager('manager name', 'manager email', 'manager room number'),
		]

		await this._easy();
	}
}

Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

