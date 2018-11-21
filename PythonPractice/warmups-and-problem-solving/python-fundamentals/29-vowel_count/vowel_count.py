def vowel_count(string):
    vowels = set('aeiou')
    string = string.lower()
    dictionary = {}

    for item in string:
        if item in vowels:
            dictionary[item] = dictionary.get(item, 0) + 1

    return dictionary
