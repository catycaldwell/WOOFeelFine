#!/usr/bin/env python3
import random
from flask import Flask, jsonify, request
#from flask.ext.api import status

application = Flask(__name__)

class Quote(object):
    def __init__(self, quote, feeling):
        self.__quote = quote
        self.__feeling = feeling

    def serialize(self):
        return {
            'quote' : self.__quote,
            'feeling' : self.__feeling
        }

quotes = [
    Quote("I feel sad...", "sad"),
    Quote("I feel happy...", "happy"),
    Quote("I feel angry...", "angry"),
    Quote("I feel loved...", "loved")
]

@application.route("/quote", methods=['GET', 'POST'])
def quote():
    if request.method == "GET":
        return jsonify(
            random.choice(quotes).serialize()
        )
    elif request.method == "POST":
        return None, 404

    return None, 405

if __name__ == "__main__":
    application.run(host='0.0.0.0')
