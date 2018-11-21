def letter_counter(string):
    string = string.lower()

    def inner(char):
        return string.count(char.lower())

    return inner
