# Put your app in here.
from flask import Flask, request
import operations

app = Flask(__name__)


@app.route("/add")
def add():
    a, b = int(request.args["a"]), int(request.args['b'])
    result = operations.add(a, b)
    return f"{result}"


@app.route("/sub")
def sub():
    a, b = int(request.args["a"]), int(request.args['b'])
    result = operations.sub(a, b)
    return f"{result}"


@app.route("/mult")
def mult():
    a, b = int(request.args["a"]), int(request.args['b'])
    result = operations.mult(a, b)
    return f"{result}"


@app.route("/div")
def div():
    a, b = int(request.args["a"]), int(request.args['b'])
    result = operations.div(a, b)
    return f"{result}"


OPERATIONS = {
    'add': operations.add,
    'sub': operations.sub,
    'mult': operations.mult,
    'div': operations.div
}


@app.route('/math/<op>')
def math(op):
    result = OPERATIONS[op](int(request.args["a"]), int(request.args['b']))
    return f"{result}"
    # if op == 'add':
    #     a, b = int(request.args["a"]), int(request.args['b'])
    #     result = operations.add(a, b)
    #     return f"{result}"
    # elif op == 'sub':
    #     a, b = int(request.args["a"]), int(request.args['b'])
    #     result = operations.sub(a, b)
    #     return f"{result}"
    # elif op == 'mult':
    #     a, b = int(request.args["a"]), int(request.args['b'])
    #     result = operations.mult(a, b)
    #     return f"{result}"
    # elif op == 'div':
    #     a, b = int(request.args["a"]), int(request.args['b'])
    #     result = operations.div(a, b)
    #     return f"{result}"
