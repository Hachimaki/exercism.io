var words = function(input) {
	// Split input into indivudual words based on space
	// and newline delimiters.
	var search = input.split(/[\s]+/);

	// Setup output object.
	var searchResults = {};

	// Parse stored array.
	for (var i = 0; i < search.length; i++) {
		// If the value of a key pair is non-existant 
		// (i.e., hasn't come up in the pattern), set it.
		if (searchResults[search[i]] == null) {
			// Set value of key pair to 1. (First occurance.)
			searchResults[search[i]] = 1;
		}
		else {
			// Otherwise, it exists so increment the value.
			searchResults[search[i]] += 1;
		}
	}

	// Return the stored JSON results.
	return searchResults;
};

module.exports = words;