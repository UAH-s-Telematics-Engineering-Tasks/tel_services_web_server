
var PATTERNS = new Object();

PATTERNS.decimal = new RegExp(/^-?((\d|[0-8]\d)(\.\d{1,6})?|90)º,\s*-?((\d|\d\d|[12]\d\d|3[0-5]\d)(\.\d{1,6})?|360)º$/, '');
PATTERNS.cardinal = new RegExp(/^[nNsS]\s*((\d|[0-8]\d)º\s*(\d|[0-5]\d)'\s*(\d|[0-5]\d)(\.\d{1,6})?"|90º\s*0'\s*0"),\s*[eEoO]\s*((\d|\d\d|[12]\d\d|3[0-5]\d)º\s*(\d|[0-5]\d)'\s*(\d|[0-5]\d)(\.\d{1,6})?"|360º\s*0'\s*0")$/, '');

function parse_cardinal_coordinates(coord) {
  var google_query = "https://maps.google.com/maps?q=+Xº+X’+X”,+Xº+X’+X”";
  var values = coord.match(/\d+(\.\d+)?/g);
  var cardinality = coord.match(/[nNsSeEoO]/g);

  if (cardinality[0].toUpperCase() == "S")
    values[0] = "-" + values[0];
  if (cardinality[1].toUpperCase() == "O")
    values[1] = "-" + values[1];

  for (i in values)
    google_query = google_query.replace(/X/, values[i]);

  document.getElementById("map").value = google_query;
}

function parse_decimal_coordinates(coord) {
  var values = coord.match(/-?\d+(\.\d+)?/g);

  for (i in values)
    if (values[i] > 0)
      values[i] = "+" + values[i];

  document.getElementById("map").value = "https://maps.google.com/maps?q=" + values[0] + "," + values[1];
}

function validate_input(input_box) {
  if (!input_box.value.search(PATTERNS.cardinal)) {
    //parse_cardinal_coordinates(input_box.value);
    FORM_STATUS.coordinates = true;
    FORMATS.coordinates = "Cardinal";
    input_box.setAttribute("class", input_box.getAttribute("class") + " valid");
  }
  else if (!input_box.value.search(PATTERNS.decimal)) {
    //parse_decimal_coordinates(input_box.value);
    FORM_STATUS.coordinates = true;
    FORMATS.coordinates = "Decimal";
    input_box.setAttribute("class", input_box.getAttribute("class") + " valid");
  }
  else {
    input_box.setAttribute("class", "text_input");
    FORM_STATUS.coordinates = false;
  }
}
