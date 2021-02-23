const question = document.querySelector('#question');
const input = document.querySelector('.inputText');
const btns = document.querySelector('#btn');
const questionNumber = document.querySelector('.questionNum');
const answer = document.querySelector('.answer');
const userScore = document.querySelector('.score');
let currentIndex = 0;
let score = 0;

const flashcard = [
	{
		question: 'What does ES6 stand for?',
		answer: ['ecmascript6 ', 'Ecmascript6 ', 'ecma script 6'],
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

// const cards = document.querySelectorAll('.flip-card-inner');

// function flipCard() {
// 	this.classList.toggle('flip');
// }
// cards.forEach((card) => card.addEventListener('click', flipCard));

question.innerText = flashcard[currentIndex].question;
questionNumber.innerText = `${currentIndex + 1}/${flashcard.length}`;
answer.innerText = flashcard[currentIndex].answer;

btns.addEventListener('click', (event) => {
	event.preventDefault();
	// console.log(flashcard[currentIndex].answer);
	if (flashcard[currentIndex].answer.includes(input.value)) {
		console.log(input.value);
		input.value = '';
		currentIndex++;
		console.log(currentIndex);
		question.innerText = flashcard[currentIndex].question;
		answer.innerText = flashcard[currentIndex].answer;
		questionNumber.innerText = `${currentIndex}/${flashcard.length}`;
		score += 10
		userScore.innerText = score;
	} else if (input.value != flashcard[currentIndex].answer) {
		console.log('Wrong, try again');
	} else {
		//flip function
	}
});

let winningcondition = () => {
	if (currentIndex == 10) {
		if (score >= 60) {
			let congratulation = document.createElement('P');
			congratulation.innerText = `Congratulation!!!`;
			document.body.appendChild(congratulation);
		}else {
			let tryAgain = document.createElement('P')
			tryAgain.innerText = `Try again!`
			document.body.appendChild(tryAgain)
		}
	}
};
