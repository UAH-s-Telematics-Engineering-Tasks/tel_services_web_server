USE dispositivos;

INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (1, 1, 1);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (2, 2, 2);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (3, 3, 3);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (4, 4, 4);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (5, 5, 5);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (6, 6, 6);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (7, 7, 7);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (8, 8, 8);
INSERT INTO parametro(id, umbralUp1, umbralDown1) VALUES (9, 9, 9);

INSERT INTO sensor(id) VALUES (1);
INSERT INTO sensor(id) VALUES (2);
INSERT INTO sensor(id) VALUES (3);
INSERT INTO sensor(id) VALUES (4);
INSERT INTO sensor(id) VALUES (5);
INSERT INTO sensor(id) VALUES (6);
INSERT INTO sensor(id) VALUES (7);
INSERT INTO sensor(id) VALUES (8);
INSERT INTO sensor(id) VALUES (9);

INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (1, 1, 1);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (2, 2, 2);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (3, 3, 3);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (4, 4, 4);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (5, 5, 5);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (6, 6, 6);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (7, 7, 7);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (8, 8, 8);
INSERT INTO capturaValor(id, sensorId, parametroId) VALUES (9, 9, 9);

INSERT INTO alarma(id, sensorId, estado) VALUES (1, 1, true);
INSERT INTO alarma(id, sensorId, estado) VALUES (2, 2, false);
INSERT INTO alarma(id, sensorId, estado) VALUES (3, 3, true);
INSERT INTO alarma(id, sensorId, estado) VALUES (4, 4, false);
INSERT INTO alarma(id, sensorId, estado) VALUES (5, 5, true);
INSERT INTO alarma(id, sensorId, estado) VALUES (6, 6, false);
INSERT INTO alarma(id, sensorId, estado) VALUES (7, 7, true);
INSERT INTO alarma(id, sensorId, estado) VALUES (8, 8, false);
INSERT INTO alarma(id, sensorId, estado) VALUES (9, 9, true);