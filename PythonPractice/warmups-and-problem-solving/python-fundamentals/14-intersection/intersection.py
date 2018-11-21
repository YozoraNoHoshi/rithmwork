def intersection(list1, list2):
    set2 = set(list2)
    return [item for item in list1 if item in set2]
