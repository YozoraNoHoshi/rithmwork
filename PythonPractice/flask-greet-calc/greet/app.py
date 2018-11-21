from flask import Flask

app = Flask(__name__)


@app.route('/welcome')
def welcome_message():
    '''returns a welcome message'''

    return 'welcome'


@app.route('/welcome/home')
def welcome_home_message():
    '''returns a welcome home message'''

    return 'welcome home'


@app.route('/welcome/back')
def welcome_back_message():
    '''returns a welcome back message'''

    return '<h1>welcome back</h1>'