def is_isogram(string):
    letters = {}
    for i in range(0, len(string)):
        if string[i].lower().isalpha():         # ignore spaces, hyphens, etc.
            if string[i].lower() in letters:
                return False
            else:
                letters[string[i].lower()] = 1

    return True
