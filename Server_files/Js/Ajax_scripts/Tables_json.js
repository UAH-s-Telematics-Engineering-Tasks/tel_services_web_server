var TABLE_HEADER = '<tbody><tr><th><button type="button" name="button" class="rounded show_hidden">Mostrar ocultos</button></th><th>Ciudad</th><th>Temperatura (&deg)</th><th>Humedad (%)</th><th>Ruido</th><th>Nivel de luz</th><th>Color de Iluminación</th></tr>';

var SHOW_BUTTON = '<tr><td><button class="rounded no_back" type="button" name="button">Ocultar</button></td>';

function get_n_create_table(trig) {
  /* We need to declare the parameters we are going to use in the callback! */
  $.getJSON("../Ajax_files/Table_data.json", function(recv_obj) {
    parse_data(recv_obj, trig);
  });
}

function parse_data(resp, id) {
  var table = TABLE_HEADER;

  for (const ent of resp.tables[id - 1])
    table +=  SHOW_BUTTON +
              '<td class="left">' +
              ent.city +
              '</td><td>' +
              ent.temp +
              '</td><td>' +
              ent.hum +
              '</td><td>' +
              ent.noise +
              '</td><td>' +
              ent.light +
              '</td><td>' +
              ent.color +
              '</td></tr>';

  document.getElementById("tab").innerHTML = table + '</tbody>';

  style_me_up();
}
