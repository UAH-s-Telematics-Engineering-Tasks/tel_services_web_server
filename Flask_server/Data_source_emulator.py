#!/usr/bin/python
# -*- coding: utf-8 -*-

# You'll need to get flask-restful!
# Install it with pip3 install flask-restful

import time
from flask import Flask
from flask_restful import Resource, Api
from random import randint

app = Flask(__name__)
api = Api(app)

class temperature(Resource):
	def get(self):
		value = randint(19,22)
		return {'temperature': value}


class humidity(Resource):
	def get(self):
		value = randint(30,60)
		return {'humidity': value}

class light(Resource):
	def get(self):
		value = randint(0,100)
		return {'light': value}

class sound(Resource):
	def get(self):
		value = randint(20,80)
		return {'sound': value}

class motion(Resource):
	def get(self):
		value = randint(0,1)
		return {'motion': value}

class red(Resource):
	def put(self, id):
		print("Color rojo:" + str(id))
		return {'red': id}

class green(Resource):
	def put(self, id):
		print("Color verde:" + str(id))
		return {'green': id}

class blue(Resource):
	def put(self, id):
		print("Color azul:" + str(id))
		return {'blue': id}


api.add_resource(temperature, '/temperature')
api.add_resource(humidity, '/humidity')
api.add_resource(light, '/light')
api.add_resource(sound, '/sound')
api.add_resource(motion, '/motion')
api.add_resource(red, '/red/<int:id>')
api.add_resource(green, '/green/<int:id>')
api.add_resource(blue, '/blue/<int:id>')


if __name__ == "__main__":
	app.run(host='0.0.0.0', port=8000, debug=True)
