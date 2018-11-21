def is_odd_string(phrase):
    diff = ord("a") - 1
    total = sum((ord(c) - diff) for c in phrase.lower())

    return total % 2 == 1
