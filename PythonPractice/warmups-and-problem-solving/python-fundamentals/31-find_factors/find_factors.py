def find_factors(number):
    return [num for num in range(1, number + 1) if number % num == 0]
