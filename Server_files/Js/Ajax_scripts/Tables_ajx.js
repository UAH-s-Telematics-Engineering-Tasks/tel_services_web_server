var TABLE_HEADER = '<tbody><tr><th><button type="button" name="button" class="rounded show_hidden">Mostrar ocultos</button></th><th>Ciudad</th><th>Temperatura (&deg)</th><th>Humedad (%)</th><th>Ruido</th><th>Nivel de luz</th><th>Color de Iluminación</th></tr>';

var SHOW_BUTTON = '<tr><td><button class="rounded no_back" type="button" name="button">Ocultar</button></td>';

alert("I'm loaded!");

function get_n_create_table(trig) {
  var ajax_obj = new XMLHttpRequest();
  ajax_obj.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
      parse_data(this, trig);
  };
  ajax_obj.open("GET", "../../Ajax_files/Table_data.txt", true);
  ajax_obj.send();
}

function parse_data(resp, id) {
  var table = TABLE_HEADER;

  /* TODO: Use alert()s to find out whether you are getting to the elements you want... resp.responseXML.getElementsByTagName("tbl")[id].childNodes should get the <entry> at index id... Check the lengths to see if you are right, I think so... Find info @ https://www.w3schools.com/xml/dom_nodes_navigate.asp and related pages! */

  for (const ent of resp.responseXML.getElementsByTagName("tbl")[id].childNodes)
    table +=  SHOW_BUTTON +
              '<td class="left">' +
              ent.getElementsByTagName("city")[0].childNodes[0].nodeValue +
              '</td><td>' +
              ent.getElementsByTagName("temp")[0].childNodes[0].nodeValue +
              '</td><td>' +
              ent.getElementsByTagName("hum")[0].childNodes[0].nodeValue +
              '</td><td>' +
              ent.getElementsByTagName("noise")[0].childNodes[0].nodeValue +
              '</td><td>' +
              ent.getElementsByTagName("light")[0].childNodes[0].nodeValue +
              '</td><td>' +
              ent.getElementsByTagName("color")[0].childNodes[0].nodeValue +
              '</td></tr>';

    document.getElementById("tab" + id).innerHTML = table + '</tbody>';
}
