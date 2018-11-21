def multiple_letter_count(string):
    dictionary = {}
    for letters in string:
        dictionary[letters] = dictionary.get(letters, 0) + 1
    return dictionary
