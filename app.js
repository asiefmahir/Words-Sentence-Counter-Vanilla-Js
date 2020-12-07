const textArea = document.getElementById("text");
const wordsCount = document.getElementById("word-count");
const sentencesCount = document.getElementById("sentence-count");

/**
 * Step 1
 * Find the functions
 */

/**
 * Step 2
 * Bind the functions to EventListener
 */
/**
 * /**
 * Step 3
 * Find the data and variable
 */
/**
 * Step 4
 * Implement wordCount Function
 */
/**
 * Step 5
 * Implement sentenceCount Function
 */
/**
 * Step 6
 * Compose two functions in another function
 */

function isAlphaNumeric(char) {
	return (
		(char >= "A" && char <= "Z") ||
		(char >= "a" && char <= "z") ||
		(char >= "0" && char <= "9")
	);
}
function isValidWord(word) {
	for (let w of word) {
		if (isAlphaNumeric(w)) {
			return true;
		}
	}
	return false;
}
function getWords(sentence) {
	return sentence.split(/[,|.|?|!|' ']/g);
}
function getWordCount(sentence) {
	const words = getWords(sentence);
	let count = 0;
	words.forEach((w) => {
		if (isValidWord(w)) {
			count++;
		}
	});
	return count;
}

function getSentence(sentences) {
	return sentences.split(/[.|!|?]+/g);
}
function getSentenceCount(sentences) {
	let sentencesArray = getSentence(sentences);
	let count = 0;
	let test = [];
	sentencesArray.forEach((s) => {
		console.log(sentencesArray);
		if (isValidWord(s)) {
			test.push(s);
			console.log(test);
			count++;
		}
	});
	return count;
}

function showCount() {
	wordsCount.textContent = getWordCount(textArea.value);
	sentencesCount.textContent = getSentenceCount(textArea.value);
}

textArea.addEventListener("input", showCount);
