#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys, mysql.connector

DB_DATA = {
	"USER": "DB_admin",
	"PASS": "DB_@dmin",
	"DB": "Devices"
}

DB = mysql.connector.connect(host = "localhost", user = DB_DATA["USER"], passwd = DB_DATA["PASS"], db = DB_DATA["DB"])
sensor, value = sys.argv[1], sys.argv[2]
cursor = DB.cursor(buffered = True)
try:
	cursor.execute("""INSERT INTO sensors(nombre, valor) values(%s, %s)""", (sensor, str(value)))
except:
	print("Error when writing to the DB...")
DB.commit()
cursor.close()
DB.close()
