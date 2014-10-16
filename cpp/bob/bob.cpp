/*
 *	#include <string>
 *
 *	class bob
 *	{
 *		public:
 *			bob();
 *
 *			static std::string hey(const std::string &input);
 *			static bool isQuestion(const std::string &input);
 *			static bool isSilence(const std::string &input);
 *			static bool isYelling(const std::string &input);
 *		private:
 *		protected:
 *	};
 */

/*
 *	Bob class for Exercism.io 1: Bob
 */

#include "bob.h"

//============================================================

bob::bob()
{
}

//============================================================

std::string bob::hey(const std::string &input)
{
	if (isYelling(input))
	{
		// We are being yelled at.
		return "Whoa, chill out!";
	}
	else if (isQuestion(input))
	{
		// We are being asked a question.
		return "Sure.";
	}
	else if (isSilence(input))
	{
		return "Fine. Be that way!";
	}
	else
	{
		// Non-commital response.
		return "Whatever.";
	}
}

//============================================================

bool bob::isQuestion(const std::string &input)
{
	if (!input.empty())
	{
		// If we're being asked a question, the last character should be a question mark.
		return (input.back() == '?');
	}
	else
	{
		return false;
	}
}

//============================================================

// TODO: Optimization by combining these two functions into one check

//============================================================

bool bob::isSilence(const std::string &input)
{
	// If we're getting silence, the whole string should be whitespace or empty.    
	if (!input.empty())
	{
		// Detect empty input (silence).
		for (int i = 0; i < input.length(); i++)
		{
			char c = input[i];

			if (!isspace(c))
			{
				// If not whitespace, then it's something.
				return false;
			}
		}

		return true;
	}
	else
	{
		return true;
	}
}

//============================================================

bool bob::isYelling(const std::string &input)
{
	// If we're being yelled at, the statement should have letters and should be all UPPERCASE.
	bool areThereLetters = false;
	bool isItYelling = true;

	for (int i = 0; i <= input.length(); i++)
	{
		// Test to see if yelling.
		char c = input[i];

		// Make sure it's a letter.
		if (isalpha(c))
		{
			// There are definitely letters, so we are certainly being yelled at.
			areThereLetters = true;

			// If it's a letter, it should be uppercase.
			if (!isupper(c))
			{
				// If not, quit the loop and we're not being yelled at.
				isItYelling = false;
				break;
			}
		}
	}

	return (areThereLetters && isItYelling);
}

//============================================================