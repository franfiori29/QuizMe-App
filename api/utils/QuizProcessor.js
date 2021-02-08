let array = require('./Input');
let fs = require('fs');

const questionPre = 'REPLACE5959e34adf833e1451af';
let currQuestion = 148;

let output = array.map((questionText) => {
	let textArray = questionText
		.split(/\n/)
		.map((e) => e.trim())
		.filter((e2) => e2 !== '');
	let question = {
		_id: questionPre + (++currQuestion).toString().padStart(4, '0'),
	};
	question.title = textArray[0];
	let optionsArr = [];
	for (let i = 1; i <= 4; i++) {
		let answer = textArray[i].slice(2).trim();
		let answerObj = {
			title: answer,
			result: false,
		};
		optionsArr.push(answerObj);
	}
	let correct = textArray[5] - 1;
	if (correct) optionsArr[correct].result = true;
	question.options = optionsArr;
	return question;
});
const data = JSON.stringify(output);

fs.writeFileSync('./processorOutput.js', data);
console.log('done');
