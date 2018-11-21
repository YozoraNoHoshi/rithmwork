def range_in_list(array, start=0, end=None):

    if end is None:
        end = len.array()

    return sum([array[start:end + 1]])
