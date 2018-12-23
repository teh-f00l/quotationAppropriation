let fs = require('fs');
let text = fs.readFileSync('./sampleText.txt').toString();
let order = 3;
let ngrams = {};
let quoteMin = 10;
let quoteMax = 120;
let beginnings = [];

// Length of final quote
let getRandomQuoteLength = () => {
	let min = Math.ceil(quoteMin);
	let max = Math.floor(quoteMax);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Split text into letters
let createBeginnings = () => {
	for (var j = 0; j < text.length; j++) {
		beginnings.push(text.charAt(j));
	}
}

// Gather text for markov object
let getGrams = () => {
	for (var i = 0; i <= text.length - order ; i++) {
		var gram = text.substring(i, i + order);

		if(!ngrams[gram]) {
			ngrams[gram]= [];
		} 
		ngrams[gram].push(text.charAt(i + 3 ));
	}
}

// Return random token from array
let chooseStartingToken = () => {
	let index = Math.floor(Math.random() * beginnings.length);
	return beginnings[index];
}

// Select random letter from possibilities
let findNextLetter = (currentGram) => {
	let nextLetters = []; // creates list of letters after current letter
	for (var l = 0; l < beginnings.length; l++) {
		if(beginnings[l] === currentGram) {
			nextLetters.push(beginnings[l+1]);
		}
	}

	let letter = nextLetters[Math.floor(Math.random() * nextLetters.length)];
	return letter;
}

let markovText = () => {
	createBeginnings();
	getGrams();
	
	let quoteLength = getRandomQuoteLength();
	let currentGram = chooseStartingToken();
	let result = currentGram;

	while (result.length < quoteLength) {
		currentGram = findNextLetter(currentGram);
		result += `${currentGram}`;
	}

	return result;
}

module.exports = markovText();
