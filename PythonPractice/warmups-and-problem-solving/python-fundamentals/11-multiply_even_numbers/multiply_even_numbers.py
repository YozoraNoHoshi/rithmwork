def multiply_even_numbers(num_list):
    count = 1
    for numbers in num_list:
        if numbers % 2 == 0:
            count *= numbers
    return count
