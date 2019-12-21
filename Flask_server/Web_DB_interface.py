#!/usr/bin/python
# -*- coding: utf-8 -*-

import os, time, json, urllib3, mysql.connector

DB_DATA = {
	"USER": "DB_admin",
	"PASS": "DB_@dmin",
	"DB": "dispositivos"
}

EMULATOR_DATA = {
	"IP": "172.22.0.98",
	"PORT": "8000"
}
# We need to open a transaction for EACH access so that we see an updated version of the DB
# Otherwise we'll only see changes made in our session... We could try to establish a READ COMMITED
# isolation level but our DBMS (DB Management System) doesn't seem to recognize it...
# DB.start_transaction(isolation_level = "READ COMMITTED")

sensor_types = {"temperature": 0, "humidity": 0, "light": 0, "sound": 0, "motion": 0}
RGB_values = {"red": 0, "green": 0, "blue": 0}

server_addr = "http://" + EMULATOR_DATA["IP"] + ":" + EMULATOR_DATA["PORT"] + "/"

# Save 10 connections in a pooling state: we keep them open to avoid having to reestablishing them with each new request
# This'll let us get data faster as we are making quite a lot of queries...
http = urllib3.PoolManager()

def update_sensors(sen):
	DB = mysql.connector.connect(host = "localhost", user = DB_DATA["USER"], passwd = DB_DATA["PASS"], db = DB_DATA["DB"])
	cursor = DB.cursor()
	try:
		response = http.request('GET', server_addr + sen)
		data = json.loads(response.data)
		value = data[sen]
	except ValueError:
		print("Error reading sensor data...")
	if value != sensor_types[sen]:
		try:
			sensor_types[sen] = value
			cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", (sen, value))
			DB.commit()
		except ValueError:
			print('Error al insertar en base de datos')
	DB.close()

def update_light_colour():
	DB = mysql.connector.connect(host = "localhost", user = DB_DATA["USER"], passwd = DB_DATA["PASS"], db = DB_DATA["DB"])
	cursor = DB.cursor()
	for colour in RGB_values:
		try:
			cursor.execute("SELECT valor FROM sensors WHERE nombre='" + colour + "' ORDER BY time DESC LIMIT 1")
			cursor_value = int(cursor.fetchone()[0])
			if cursor_value != RGB_values[colour]:
				RGB_values[colour] = cursor_value
				print(colour.capitalize() + ": " + str(cursor_value))
				response = http.request("PUT", server_addr + colour + "/" + str(cursor_value))
		except ValueError:
			print("Error in DB connection or PUT request...")
	DB.close()

if __name__ == "__main__":
	DB = mysql.connector.connect(host = "localhost", user = DB_DATA["USER"], passwd = DB_DATA["PASS"], db = DB_DATA["DB"])
	cursor = DB.cursor()
	cursor.execute ("DROP table sensors")
	cursor.execute ("create table sensors( time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, nombre VARCHAR(15), valor INTEGER)")
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('temperature', 20))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('humidity', 40))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('light', 30))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('sound', 10))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('motion', 0))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('red', 20))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('blue', 20))
	cursor.execute ("INSERT INTO sensors(nombre, valor) values(%s, %s)", ('green', 20))
	DB.commit()
	DB.close()

	while True:
		for sensor in sensor_types:
			update_sensors(sensor)
			update_light_colour()
			time.sleep(2)
