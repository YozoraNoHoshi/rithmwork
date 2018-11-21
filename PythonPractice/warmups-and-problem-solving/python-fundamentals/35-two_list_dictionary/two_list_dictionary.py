def two_list_dictionary(key, val):
    two_list = {}
    for index, value in enumerate(key):
        if index < len(val):
            two_list[key[index]] = val[index] if index < len(val) else None
