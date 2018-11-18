let fs = require('fs');
let sampleText = fs.readFileSync('./sampleText.txt').toString();
let order = 2; // Order (or length) of each ngram
let ngrams = {};
let quoteMin = 10;
let quoteMax = 120; // What is the maximum amount we will generate?
var tokens = [];

// Length of final quote
let getRandomQuoteLength = () => {
	let min = Math.ceil(quoteMin);
	let max = Math.floor(quoteMax);
	return Math.floor(Math.random() * (max - min + 1)) + min;;
}

// Split text up into tokens
// Using spaces for now to preserve punctuation
let createTokens = () => {
	let words = sampleText.split(RegExp(/\s|\n|\r/gm));
	for (var j = 0; j < words.length; j++) {
		tokens.push(words[j]);
	}
}

// Gather text for markov object
let getGrams = () => {
	for (var i = 0; i < tokens.length - order; i++) {
		// Use slice to pull out N elements from array of words.
		let gram = tokens.slice(i, i + order).join(' ');
		let next = tokens[i + order];

		// If this is a new gram
		if(!ngrams[gram]) {
			ngrams[gram] = [];
		}
		// Always add to list
		ngrams[gram].push(next);
	}
}

// Return random token from array
let chooseStartingToken = () => {
	let index = Math.floor(Math.random() * tokens.length);
	return tokens[index];
}

// Select random word from possibilities
let findNextWord = (currentWord) => {
	let nextWords = []; // creates list of words after current word
	for (var w = 0; w < tokens.length; w++) {
		if (tokens[w] === currentWord) {
			nextWords.push(tokens[w+1]);
		}
	}

	let word = nextWords[Math.floor(Math.random() * nextWords.length)]; // choose a random next word
	return word;
}

// Generate sentences
let markovText_byword = () => {
	createTokens();
	getGrams();

	let quoteLength = getRandomQuoteLength();
	let currentWord = chooseStartingToken();
	let sentence = `${currentWord} `;
	while (sentence.length < quoteLength) { 
		currentWord = findNextWord(currentWord);
		sentence += `${currentWord} `;
	}
	return sentence;
}

// Capitalize first letter
let output = () => {
	let phrase = markovText_byword();
	phrase = `${phrase.charAt(0).toUpperCase()}${phrase.substring(1)}`;
	// console.log(phrase);
}

module.exports = output();
