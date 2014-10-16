var Bob = function() {};

Bob.prototype.hey = function(input) {

	if (this.isYelling(input))
	{
		// We are being yelled at.
		return "Whoa, chill out!";
	}
	else if (this.isQuestion(input))
	{
		// We are being asked a question.
		return "Sure.";
	}
	else if (this.isSilence(input))
	{
		// We are being told nothing.
		return "Fine. Be that way!";
	}
	else {
		// We respond to everything else.
		return "Whatever.";
	}

};

Bob.prototype.isQuestion = function(input) {

	// Test to see if the statement ends on a question mark.
	return (input.charAt(input.length - 1) == "?");

};

Bob.prototype.isSilence = function(input) {

	// Test to see if the statement is blank (silence).
	return (input.trim() == "");

};

Bob.prototype.isYelling = function(input) {

	// Test to see if all of the letters are UPPERCASE which indicates yelling.
	if (input.match(/[a-z]/i))
	{
		return (input == input.toUpperCase());
	}
	else {
		// If there's no letters we're not being yelled at.
		return false;
	}

};

module.exports = Bob;