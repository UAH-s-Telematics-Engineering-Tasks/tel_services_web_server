#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask, url_for, session, render_template, Response, request, flash, redirect, abort, jsonify
from flaskext.mysql import MySQL
from flask_socketio import SocketIO, emit
import json, time

mysql = MySQL()

# Include "export Flask_settings=/home/pablo/Documents/UAH/UAH_third_year/Telematic_services/Tel_services_repo/Flask_server/config/Site_conf.cfg" in .bashrc
# Don't forget to source it later for the changes to take effect. Run: . ~/.bashrc

app = Flask(__name__)
socketio = SocketIO(app)
app.config.from_object(__name__)
app.config.from_envvar('Flask_settings', silent = True)
mysql.init_app(app)

sensor_types = {"temperature": 0, "humidity": 0, "light": 0, "sound": 0, "motion": 0}

def event_sensor():
	while True:
		conn = mysql.connect()
		cursor = conn.cursor()
		for sensor in sensor_types:
			cursor.execute("SELECT valor FROM sensors where nombre='" + sensor +"' ORDER BY time DESC LIMIT 1")
			ret_value = int(cursor.fetchone()[0])
			if ret_value != sensor_types[sensor]:
				sensor_types[sensor] = ret_value
				j_data = {"tipo": sensor, "valor": ret_value}
				json_encoded_data = json.dumps(j_data)
				print(j_data)
				#flash("Updated the " + sensor + " sensor")
				yield "data: %s\n\n" % str(json_encoded_data)
		conn.close()

def event_sensor_json():
	conn = mysql.connect()
	cursor = conn.cursor()
	cursor.execute("SELECT valor FROM sensors where nombre='temperature' ORDER BY time DESC LIMIT 1")
	ret_value = int(cursor.fetchone()[0])
	return {"tipo": "temperature", "valor": ret_value}
	conn.close()

@app.route('/update_sensor')
def sse_request():
	return Response(event_sensor(), mimetype='text/event-stream')

@app.route('/sensor_graph')
def sensor_graph():
	return render_template('sensor_graph.html')

@socketio.on('connect', namespace = '/sensor_sock')
def graph_socket():
	print("Socket connected")
	emit("incoming_data", event_sensor_json())

@socketio.on('more', namespace = '/sensor_sock')
def send_data(msg):
	print("Feeding more data!")
	emit("incoming_data", event_sensor_json())

@app.route('/')
def main():
	return render_template('index.html')

@app.route('/sensors')
def sensors():
	return render_template("sensors.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
	error = None
	if request.method == 'POST':
		if request.form['username'] != app.config['USERNAME']:
			error = 'Invalid username'
		elif request.form['password'] != app.config['PASSWORD']:
			error = 'Invalid password'
		else:
			session['logged_in'] = True
			flash('Has entrado en la sesion')
			return redirect(url_for('sensors'))
	return render_template('login.html', error = error)

@app.route('/logout')
def logout():
	session.pop('logged_in', None)
	flash('Has salido de la sesion')
	return redirect(url_for('main'))


@app.route('/iluminacion')
def iluminacion():
	return render_template('iluminacion.html')


@app.route('/setcolor', methods=['GET'])
def setcolor():
	cnx = mysql.connect()
	cursor = cnx.cursor()
	RGB = ["red", "green", "blue"]
	index = 1
	for color in RGB:
		cursor.execute("INSERT INTO sensors(nombre, valor) VALUES(%s, %s)", (color, int("0x" + request.args.get("color")[index:index + 2], 16)))
		index += 2
	cnx.commit()
	cnx.close()
	return {'color': request.args.get("color")}

if __name__=='__main__':
	socketio.run(app, host = "0.0.0.0")
