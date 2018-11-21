def extract_full_name(people):
    return [f"{person['first']} {person['last']}" for person in people]
