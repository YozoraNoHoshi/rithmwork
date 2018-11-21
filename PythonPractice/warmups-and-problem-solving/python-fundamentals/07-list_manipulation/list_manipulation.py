def list_manipulation(list, cmd, location, value=None):
    if cmd == "add":
        if location == "beginning":
            list.insert(0, value)
            return list
        elif location == 'end':
            list.append(value)
            return list
    elif cmd == 'remove':
        if location == 'beginning':
            return list.pop(0)
        elif location == 'end':
            return list.pop()
