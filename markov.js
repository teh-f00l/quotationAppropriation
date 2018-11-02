let fs = require('fs');
let text = fs.readFileSync('./sampleText.txt').toString();
let order = 3;
let ngrams = {};
let quoteMin = 10;
let quoteMax = 120;


markovText();

function getGrams() {
	for (var i = 0; i <= text.length - order ; i++) {
		var gram = text.substring(i, i + order);

		if(!ngrams[gram]) {
			ngrams[gram]= [];
		} 
		ngrams[gram].push(text.charAt(i + 3 ));
	}
}

function markovText() {
	getRandomQuoteLength();
	getGrams();
	
	let currentGram = text.substring(0, order);
	let result = currentGram;

	for (var i = 0; i < randomLength; i++) {
		let possiblities = ngrams[currentGram];
		let next = possiblities[Math.floor(Math.random() * possiblities.length)];
		result += next;
		let len = result.length
		currentGram = result.substring(len - 3, len);
	}
	
	console.log(result);
}

function getRandomQuoteLength() {
	let min = Math.ceil(quoteMin);
	let max = Math.floor(quoteMax);
	randomLength = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomLength;
}

