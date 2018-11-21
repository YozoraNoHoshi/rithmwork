def sum_pairs(ls, num):
    passed = set()
    for value in ls:
        diff = num - value

        if diff in passed:
            return (diff, value)

        passed.add(value)
    return ()
