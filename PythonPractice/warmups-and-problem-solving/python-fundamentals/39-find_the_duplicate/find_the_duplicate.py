def find_the_duplicate(lis):
    for items in lis:
        if lis.count(items) > 1:
            return items
    return None
