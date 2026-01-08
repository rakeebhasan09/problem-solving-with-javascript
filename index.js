// Problem One - Reverse String Function
function reverseString(str) {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}
console.log(reverseString("hello"));

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
console.log(vowelCounter("programming"));

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

// Problem Four = Max Number Finder
function maxNumberFinder(arr) {
	let maxNumber = 0;
	for (let number = 0; number < arr.length; number++) {
		let currentNumber = arr[number];
		if (currentNumber > maxNumber) {
			maxNumber = currentNumber;
		}
	}
	return maxNumber;
}
console.log(maxNumberFinder([5, 1, 9, 3]));

// Problem Five - Remove Duplicates from an Array
function removeDuplicates(arr) {
	let noDuplicates = [];

	for (let i = 0; i < arr.length; i++) {
		if (!noDuplicates.includes(arr[i])) {
			noDuplicates.push(arr[i]);
		}
	}

	return noDuplicates;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//  Problem Six - Some of an array
function arraySomeGenerator(array) {
	let total = 0;
	for (let item = 0; item < array.length; item++) {
		total = total + array[item];
	}
	return total;
}
console.log(arraySomeGenerator([1, 2, 3, 4]));

// Problem Seven - Even Numbers Finder
function evenNumbersFinder(numbers) {
	let evenNumbers = [];
	for (let num = 0; num < numbers.length; num++) {
		if (numbers[num] % 2 === 0) {
			evenNumbers.push(numbers[num]);
		}
	}
	return evenNumbers;
}
console.log(evenNumbersFinder([1, 2, 3, 4, 5, 6]));

// Problem Eight - Capitalize First Letter of Each Word
function capitalizeWordMaker(sentence) {
	let words = sentence.split(" ");
	let result = [];

	for (let word of words) {
		result.push(word[0].toUpperCase() + word.slice(1));
	}

	return result.join(" ");
}
console.log(capitalizeWordMaker("hello world"));

// Problem Nine - Find the Factorial of a Number
function factorialNumberFinder(num) {
	let factorial = 1;
	for (let i = 1; i <= num; i++) {
		factorial = factorial * i;
	}
	return factorial;
}
console.log(factorialNumberFinder(5));

// Problem Ten -  PingPong Challenge
function pingPongChallenge() {
	for (let num = 1; num <= 20; num++) {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log("PingPong");
		} else if (num % 5 === 0) {
			console.log("Pong");
		} else if (num % 3 === 0) {
			console.log("Ping ");
		} else {
			console.log(num);
		}
	}
}
pingPongChallenge();
