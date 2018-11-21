DAYS = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"
]


def return_day(date):
    """Return name of day."""

    if date < 1 or date > 7:
        return None

    return DAYS[date - 1]
