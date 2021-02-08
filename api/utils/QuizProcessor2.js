let str = require('./Input');
let fs = require('fs');

const questionPre = 'REPLACE5959e34adf833e1451af';
let currQuestion = 345;

function getOutput(questionsText) {
	let questionArr = [];
	let textArray = questionsText
		.split(/\n/)
		.map((e) => e.trim())
		.filter((e2) => e2 !== '');
	while (textArray.length > 0) {
		let questionTextArr = textArray.splice(0, 6);
		let question = {
			_id: questionPre + (++currQuestion).toString().padStart(4, '0'),
		};
		question.title = questionTextArr[0].slice(3).trim();
		let optionsArr = [];
		for (let i = 1; i <= 4; i++) {
			let answer = questionTextArr[i].slice(2).trim();
			let answerObj = {
				title: answer,
				result: false,
			};
			optionsArr.push(answerObj);
		}
		let correct = questionTextArr[5] - 1;
		if (correct) optionsArr[correct].result = true;
		question.options = optionsArr;
		questionArr.push(question);
	}
	return questionArr;
}
const data = JSON.stringify(getOutput(str));

fs.writeFileSync('./processorOutput.js', data);
console.log('done');
