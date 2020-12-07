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

/**
 * Step 7
 * Refactor the code
 */

// let word = 0;
// let sentence = 0;
// function wordCount() {
// 	let words = textArea.value.split(/[.|!|?|' ']+/g);
// 	let filteredWords = [];
// 	for (let i = 0; i < words.length; i++) {
// 		let w = words[i];
// 		let counter = 0;

// 		for (let k = 0; k < w.length; k++) {
// 			if (
// 				(w[k] >= "A" && w[k] <= "Z") ||
// 				(w[k] >= "a" && w[k] <= "z") ||
// 				(w[k] >= "0" && w[k] <= "9")
// 			) {
// 				counter++;
// 			}
// 		}

// 		if (counter !== 0) {
// 			filteredWords.push(words[i]);
// 		}

// 		word = filteredWords.length;
// 		wordsCount.textContent = word;
// 	}
// }

// function sentenceCount() {
// 	let arr = textArea.value.replace(/\s/g, "").split(/[.|!|?]+/g);
// 	let sentences = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!arr[i].includes(" ")) {
// 			sentences.push(arr[i]);
// 		}
// 	}
// 	sentence = sentences.length - 1;
// 	sentencesCount.textContent = sentence;
// }
// function count() {
// 	wordCount();
// 	sentenceCount();
// }

// textArea.addEventListener("input", count);

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
		if (isValidWord(s)) {
			test.push(s);
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
