def calculate(operation,
              first,
              second,
              make_int=False,
              message='The result is'):

    if operation == 'add':
        result = first + second
    elif operation == 'subtract':
        result = first - second
    elif operation == 'multiply':
        result = first * second
    elif operation == 'divide':
        result = first / second
    else:
        raise ValueError(
            'Operation must be add, subtract, multiply, or divide.')

    if make_int is True:
        result = int(result)

    return f"{message} {result}"
