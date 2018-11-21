def includes(collection, search, index=None):
    if isinstance(collection, dict):
        return search in collection.values()

    if index is None:
        return search in collection

    return search in collection[index:]
