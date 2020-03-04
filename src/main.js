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

Main._templateStart = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<style>
			.page-header {
				background: lightblue;
				padding: 30px;
				font-size: xx-large;
				text-align: center;
				font-weight: bold;
			}
			.team-roster-container {
				display: flex;
				padding: 50px;
			}
			.card:not(:last-child) {
				margin-right: 20px;
			}
		</style>
		<title>Team Roster</title>
	</head>
	<body>
		<div class="page-header">My Team</div>
		<div class="team-roster-container">
`;

Main._templateEnd = `
		</div>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	</body>
    </html>`
    
    module.exports = Main;