USE dispositivos;

LOAD DATA
    INFILE "Sensor_data.txt"
    INTO TABLE sensors
    FIELDS TERMINATED BY "," ENCLOSED BY "'"
    LINES  TERMINATED BY "\n";