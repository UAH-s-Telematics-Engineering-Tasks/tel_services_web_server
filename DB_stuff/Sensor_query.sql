SELECT capturaValor.valor, capturaValor.fecha, parametro.umbralUp1, parametro.umbralDown1, sensor.nombre
FROM capturaValor
INNER JOIN parametro ON parametro.id = capturaValor.parametroId
INNER JOIN sensor ON sensor.id = capturaValor.sensorId; 
