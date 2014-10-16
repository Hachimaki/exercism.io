var anagram = function(input) {
	// Store input as string to test anagrams against
	this.subject = input;
	
	// Function to test anagrams against stored test string
	this.matches = function(listInput) {
		// Set up empty array as return
		var i = 0; // Loop iterator
		var listMatches = []; // Return variable

		for (i; i < listInput.length; i++) {
			// For each item in listInput, test to see if is anagra
			if (testAnagram(subject, listInput[i])) {
				// If so, add it to return variable
				listMatches[listMatches.length] = listInput[i];
			}
		}

		// Return array of matched anagrams
		return listMatches;
	};

	this.testAnagram = function(comparator, testInput) {
		var i = 0; // Loop iterator
		var j = 0; // Loop iterator

		var count = 0;

		for (i; i < comparator.length; i++) {
			for(j; j < testInput.length; j++) {
				if (testInput.charAt(j) == comparator.charAt(i)) {
					count += 1;
				}
			}
		}

		if (count === comparator.length) {
			return true;
		} else {
			return false;
		}
	};

	return this;
};

module.exports = anagram;