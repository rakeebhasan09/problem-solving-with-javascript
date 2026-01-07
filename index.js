// Problem One - Reverse String Function
function reverseString(str) {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

// console.log(reverseString("hello"));

// Problem Two - Count Vowels in a String
function vowelCounter(sentence) {
	let totalVowel = 0;
	const allVowels = ["a", "e", "i", "o", "u"];
	for (let i = 0; i < sentence.length; i++) {
		const element = sentence[i];
		for (let j = 0; j < allVowels.length; j++) {
			if (element === allVowels[j]) {
				totalVowel = totalVowel + 1;
			}
		}
	}
	return totalVowel;
}

// console.log(vowelCounter("programming"));

// Problem Three - Check for Palindrome
function checkPalindrome(str) {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	if (str === reversed) {
		return true;
	} else {
		return false;
	}
}

console.log(checkPalindrome("hello"));
