def find_greater_numbers(lis):
    counter = 0
    for i in range(len(lis)):
        for j in range(i + 1, len(lis)):
            if lis[j] > lis[i]:
                counter += 1

    return counter