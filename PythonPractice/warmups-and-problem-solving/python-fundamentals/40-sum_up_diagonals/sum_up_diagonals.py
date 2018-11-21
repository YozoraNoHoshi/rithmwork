def sum_up_diagonals(matrix):
    total = 0
    for i in range(len(matrix)):
        total += matrix[i][i]
        total += matrix[i][-1 - i]
    return total
