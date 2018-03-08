# Based on feedback, this import gets us the string.ascii_lowercase.  Thanks everyone!
import string

def is_pangram(sentence):
    # Python 3 doesn't recognize string.ascii_lowercase??
    # alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for letter in string.ascii_lowercase:
        if letter not in sentence.lower():
            return False

    return True


