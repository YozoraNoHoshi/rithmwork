def partition(array, cb):
    true_list = []
    false_list = []
    for items in array:
        if cb(items):
            true_list.append(items)
        else:
            false_list.append(items)
    return [true_list, false_list]