
var URL_STATUS = {
  valid: false,
  type: "Undefined"
};

function parse_cardinal_coordinates(coord) {
  var google_query = "https://maps.google.com/maps?q=+Xº+X’+X”,+Xº+X’+X”";
  var values = coord.match(/\d+(\.\d+)?/g);
  var cardinality = coord.match(/[nNsSeEoO]/g);

  if (cardinality[0] == "S" || cardinality[0] == "s")
    values[0] = "-" + values[0];
  if (cardinality[1] == "O" || cardinality[1] == "o")
    values[1] = "-" + values[1];

  for (i in values)
    google_query = google_query.replace(/X/, values[i]);
  return google_query;
}

function parse_decimal_coordinates(coord) {
  var values = coord.match(/-?\d+(\.\d+)?/g);

  for (i in values)
    if (values[i] > 0)
      values[i] = "+" + values[i];

  return "https://maps.google.com/maps?q=" + values[0] + "," + values[1];
}

function validate_input(input_box) {
  if (!input_box.value.search(/^[nNsS]\s*\d+(\.\d+)?º\s*\d+(\.\d+)?'\s*\d+(\.\d+)?",\s*[eEoO]\s*\d+(\.\d+)?º\s*\d+(\.\d+)?'\s*\d+(\.\d+)?"$/))
    parse_cardinal_coordinates(input_box.value);

  if (!input_box.value.search(/^-?\d+(\.\d+)?º,\s*-?\d+(\.\d+)?º$/))
    parse_decimal_coordinates(input_box.value);
}
