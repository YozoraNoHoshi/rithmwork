def valid_parenthesis(string):
    counter = 0
    for p in string:
        if p == "(":
            counter += 1
        elif p == ")":
            counter -= 1
    return counter == 0
