exports.compute = function(firstStrand, secondStrand) {
	// Strands should be of same length.  If not, ???
	/*
	 * if (firstStrand.length != secondStrand.length) {
	 *	// ???
	 *
	 * 	// Trim?
	 * 	if (firstStrand.length > secondStrand.length) {
	 *		firstStrand = firstStrand.slice(0, secondStrand.length);
	 *	}
	 *	else {
	 *		secondStrand = secondStrand.slice(0, firstStrand.length);
	 *	}
	 * }
	 */

	// Variable to store Hamming distance as return.
	var iterator = 0;
	var hammingDistance = 0;

	// Go through each character in both strands to test if they're the same.
	for (iterator; iterator < firstStrand.length; iterator++) {
		if (firstStrand.charAt(iterator) !== secondStrand.charAt(iterator)) {
			// If not, it adds to the Hamming distance.
			hammingDistance++;
		}
	}

	// Return computed Hamming distance of the two strands.
	return hammingDistance;
};