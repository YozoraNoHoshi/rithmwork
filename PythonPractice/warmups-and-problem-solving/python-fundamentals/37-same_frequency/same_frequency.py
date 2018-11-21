def freq_counter(collection):
    counter = {}

    for item in collection:
        counter[item] = counter.get(item, 0) + 1

    return counter


def same_frequency(num1, num2):
    return freq_counter(str(num1)) == freq_counter(str(num2))
