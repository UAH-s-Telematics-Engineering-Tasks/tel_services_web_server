var TABLE_HEADER = '<tbody><tr><th><button type="button" name="button" class="rounded show_hidden">Mostrar ocultos</button></th><th>Ciudad</th><th>Temperatura (&deg)</th><th>Humedad (%)</th><th>Ruido</th><th>Nivel de luz</th><th>Color de Iluminación</th></tr>';

var SHOW_BUTTON = '<tr><td><button class="rounded no_back" type="button" name="button">Ocultar</button></td>';

function get_n_create_table(trig) {
  alert("Entered get_n_create_table()");
  // $.getJSON("../Ajax_files/Table_data.json", function() {
    // parse_data(data, trig);
  // });
  var ajax_obj = new XMLHttpRequest();
  ajax_obj.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
      parse_data(this, trig);
  };
  ajax_obj.open("GET", "../Ajax_files/Table_data.json", true);
  ajax_obj.send();
}

function parse_data(resp, id) {
  alert("Entered parse_data()");
  var table = TABLE_HEADER;

  alert("Size: " + JSON.parse(resp.responseText).tables.length);

  for (const ent of JSON.parse(resp.responseText).tables[id - 1])
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

    document.getElementById("tab" + id).innerHTML = table + '</tbody>';

    style_me_up(id);
}

function style_me_up(n) {
  alert("Entered style_me_up()");
  $("#tab" + n + " tr:odd").css("background-color", "#00FF40");
  $("#tab" + n + " tr:even").css("background-color", "#FA58F4");
  $("#tab" + n + " tr:nth-child(1)").css("background-color", "#cccccc");
  $("#tab" + n + " td:nth-child(1)").css("background-color", "#cccccc");
  $("#tab" + n + " th:nth-child(1)").css("background-color", "#cccccc");
}
