#pragma once

#include <string>

class bob
{
	public:
		bob();

		static std::string hey(const std::string &input);
		static bool isQuestion(const std::string &input);
		static bool isSilence(const std::string &input);
		static bool isYelling(const std::string &input);
	private:
	protected:
};