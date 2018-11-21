def truncate(string, number):
    if number < 3:
        return "Truncation must be at least 3 chars."

    if number > len(string) + 2:
        return string

    return number[:number - 3] + '...'
