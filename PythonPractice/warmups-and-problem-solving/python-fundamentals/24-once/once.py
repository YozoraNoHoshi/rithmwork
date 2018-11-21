def once(fn):
    def inner(*args, **kwargs):

        if inner.called:
            return None

        inner.called = True
        return fn(*args, **kwargs)

    inner.called = False
    return inner
