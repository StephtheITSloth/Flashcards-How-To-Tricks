const question = document.querySelector('#question');
const input = document.querySelector('.inputText');
const btns = document.querySelector('#btn');
const questionNumber = document.querySelector('.questionNum');
const answer = document.querySelector('.answer');
const userScore = document.querySelector('.score');
const card = document.querySelector('.card-single');
const headerQ = document.querySelector('.headerQ');
const returnToQuestion = document.querySelector('.returnTo');
let currentIndex = 0;
let score = 0;

const flashcard = [
	{
		question: 'What does ES6 stand for?',
		answer: ['ecmascript6 ', 'Ecmascript6 ', 'ecma script 6'],
	},
	{
		question: 'How select the first character in a string?',
		answer: ['charAt(0)', 'CharAt(0)'],
	},
	{
		question: 'What does return do in a function?',
		answer: ['exits the function', 'exits'],
	},
	// {
	// 	question:
	// 		'How do you select an element from your HTML to your javascript using DOM?',
	// 	answer: [
	// 		'document.querySelector',
	// 		'document.getElementByTagName',
	// 		'document.getElementById',
	// 		'document.getElementByClass',
	// 	],
	// },
	// {
	// 	question:
	// 		'Write your code to access the value in a "target" key, which is stored in the first index of the array "array"',
	// 	answer: ['array[0].target', "array[0].['target']"],
	// },
	// {
	// 	question: 'What does the method forEach do?',
	// 	answer: [
	// 		'Iterate through an array and return an array that match a condition',
	// 	],
	// },
	// {
	// 	question: 'What is the big O of a higher order function?',
	// 	answer: ['Quadratic', 'quadratic'],
	// },
	// {
	// 	question: 'What are the different big O?',
	// 	answer: ['linear', 'Exponential', 'Logarythmic', 'Quadratic'],
	// },
	// {
	// 	question: 'What does OOP stand for in Javascript?',
	// 	answer: ['Object Oriented Programming'],
	// },
	// {
	// 	question: 'What is the first thing to do when working on a project?',
	// 	answer: ['Set your Github with a ReadMe', 'Plan it', 'Research'],
	// },
	// {
	// 	question: 'Should you worry about making your website accessible?',
	// 	answer: ['Yes'],
	// },
];

question.innerText = flashcard[currentIndex].question;
questionNumber.innerText = `${currentIndex + 1}/${flashcard.length}`;
answer.innerText = flashcard[currentIndex].answer;
btns.addEventListener('click', (event) => {
	event.preventDefault();
	if (flashcard[currentIndex].answer.includes(input.value)) {
		// console.log(input.value);
		input.value = '';
		currentIndex++;
		// console.log(currentIndex);
		question.innerText = flashcard[currentIndex].question;
		answer.innerText = flashcard[currentIndex].answer;
		questionNumber.innerText = `${currentIndex + 1}/${flashcard.length}`;
		score += 10;
		userScore.innerText = score;
	} else {
		document.querySelector('.card-single').classList.toggle('flip');
		questionNumber.innerText = ' ';
		headerQ.innerText = ' ';
		headerQ.style.visibility = 'hidden';
		returnToQuestion.addEventListener('click', (event) => {
			event.preventDefault();
			// console.log('event.dataset');
			// document.querySelector('.card-single').classList.toggle('flip-back');
		});
	}
});

let winningcondition = () => {
	if (currentIndex == 10) {
		if (score >= 60) {
			let congratulation = document.createElement('P');
			congratulation.innerText = `Congratulation!!!`;
			document.body.appendChild(congratulation);
		} else {
			let tryAgain = document.createElement('P');
			tryAgain.innerText = `Try again!`;
			document.body.appendChild(tryAgain);
		}
	}
};

// /* =========================================================
// =========================================================
// =========REFERENCES FOR JAVASCRIPT========================
// =========================================================
// =========================================================
// //www.youtube.com/watch?v=PkZNo7MFNFg
// //www.w3schools.com/tags/ref_eventattributes.asp
// //www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// //css-tricks.com/almanac/properties/b/backface-visibility/
// //www.youtube.com/watch?v=PFmuCDHHpwk
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
