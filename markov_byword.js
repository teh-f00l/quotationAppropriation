let fs = require('fs');
let sampleText = fs.readFileSync('./sampleText.txt').toString();
let order = 3; // Order (or length) of each ngram
let ngrams = {};
var tokens = [];

// Split text up into tokens
// Using spaces for now to preserve punctuation
function createTokens() {
	let words = sampleText.split(RegExp(/\s|\n|\r/gm));
	for (var j = 0; j < words.length; j++) {
		tokens.push(words[j]);
	}
}

// Return random token from array
function chooseStartingToken() {
	let index = Math.floor(Math.random() * tokens.length);
	console.log(tokens[index]);
	return tokens[index];
}

// Select random word from possibilities
function findNextWord(currentWord) {
	let nextWords = []; // creates list of words after current word
	for (var w = 0; w < tokens.length; w++) {
		if (tokens[w] === currentWord) {
			nextWords.push(tokens[w+1]);
		}
	}

	let word = nextWords[Math.floor(Math.random() * nextWords.length)]; // choose a random next word
	// console.log(word);
	return word;
}

// Generate sentences
function markovText_byword() {
	createTokens();
	let currentWord = chooseStartingToken();
	let sentence = `${currentWord} `;
	while (currentWord.indexOf(".") < 0) { // while we haven't found a period
		currentWord = findNextWord(currentWord);
		sentence += `${currentWord} `;
	}
	// sentence.charAt(0).toUpperCase();
	console.log(sentence);
}

module.exports = markovText_byword();
