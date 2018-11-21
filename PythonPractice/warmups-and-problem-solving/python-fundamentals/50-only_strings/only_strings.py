def only_strings(*args):
    for item in args:
        if type(item) is not str:
            return False
    return True