def flip_case(string, letter):
    output = ''
    for letters in string:
        if letters.lower() == letter.lower():
            letters = letters.swapcase()
        output += letters
    return output
