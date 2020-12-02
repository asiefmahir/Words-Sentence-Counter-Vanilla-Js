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

let word = 0;
let sentence = 0;
function wordCount() {
	let words = textArea.value.split(/[.|!|?|' ']+/g);
	let filteredWords = [];
	for (let i = 0; i < words.length; i++) {
		let w = words[i];
		let counter = 0;

		for (let k = 0; k < w.length; k++) {
			if (
				(w[k] >= "A" && w[k] <= "Z") ||
				(w[k] >= "a" && w[k] <= "z") ||
				(w[k] >= "0" && w[k] <= "9")
			) {
				counter++;
			}
		}

		if (counter !== 0) {
			filteredWords.push(words[i]);
		}

		word = filteredWords.length;
		wordsCount.textContent = word;
	}
}

function sentenceCount() {
	let arr = textArea.value.replace(/\s/g, "").split(/[.|!|?]+/g);
	let sentences = [];
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].includes(" ")) {
			sentences.push(arr[i]);
		}
	}
	sentence = sentences.length - 1;
	sentencesCount.textContent = sentence;
}
function count() {
	wordCount();
	sentenceCount();
}

textArea.addEventListener("input", count);
