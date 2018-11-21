def longest_named_keyword_value(**args):
    longest = ''
    for arg in args:
        if len(arg) > len(longest):
            longest = arg

    return args[longest]
