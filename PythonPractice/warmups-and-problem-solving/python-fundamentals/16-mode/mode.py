def mode(array):
    counter = {}
    for items in array:
        counter[items] = counter.get(items, 0) + 1
    highest_value = max(counter.values())
    for (keys, values) in counter.items():
        if highest_value == values:
            return keys