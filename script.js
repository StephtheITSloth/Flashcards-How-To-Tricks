const question = document.querySelector('#question');
const input = document.querySelector('.inputText');
const btns = document.querySelector('#btn');
const questionNumber = document.querySelector('.questionNum');
const answer = document.querySelector('#answer');

let currentIndex = 0;

const flashcard = [
	{
		question: 'What does ES6 stand for?',
		answer: ['ecmascript6 ', ' Ecmascript6 ', ' ecma script 6'],
	},
	{
		question: 'How do you capitalize the first letter in a string?',
		answer: ['array.charAt(0).toUpperCase() + array.subString(1)'],
	},
	{
		question: 'What does return do in a function?',
		answer: ['exits the function', 'exit'],
	},
	{
		question:
			'How do you select an element from your HTML to your javascript using DOM?',
		answer: [
			'document.querySelector',
			'document.getElementByTagName',
			'document.getElementById',
			'document.getElementByClass',
		],
	},
	{
		question:
			'Write your code to access the value in a "target" key, which is stored in the first index of the array "array"',
		answer: ['array[0].target', "array[0].['target']"],
	},
	{
		question: 'What does the method forEach do?',
		answer: [
			'Iterate through an array and return an array that match a condition',
		],
	},
	{
		question: 'What is the big O of a higher order function?',
		answer: ['Quadratic', 'quadratic'],
	},
	{
		question: 'What are the different big O?',
		answer: ['linear', 'Exponential', 'Logarythmic', 'Quadratic'],
	},
	{
		question: 'What does OOP stand for in Javascript?',
		answer: ['Object Oriented Programming'],
	},
	{
		question: 'What is the first thing to do when working on a project?',
		answer: ['Set your Github with a ReadMe', 'Plan it', 'Research'],
	},
	{
		question: 'Should you worry about making your website accessible?',
		answer: ['Yes'],
	},
];

question.innerText = flashcard[currentIndex].question;
questionNumber.innerText = `${currentIndex + 1}/${flashcard.length}`;
answer.innerText = flashcard[currentIndex].answer;

btns.addEventListener('click', (event) => {
	event.preventDefault();
	if (input.value == flashcard[currentIndex].answer) {
		console.log('correct');
		currentIndex++;
		question.innerText = flashcard[currentIndex].question;
		questionNumber.innerText = `${currentIndex}/${flashcard.length}`;
	} else {
		console.log('wrong');
	}
});
